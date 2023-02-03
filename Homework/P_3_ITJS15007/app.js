import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector('ul');
let sendBtn = document.getElementById('sendBtn');
let sendInput = document.getElementById('send');
let updateBtn = document.getElementById('updateBtn');
let updateInput = document.getElementById('update');
let navBtn = document.querySelector('nav');
let roomBtn = document.querySelectorAll('button');
let userUpdated = document.getElementById('userUpdated');

let username = "Anonymous";
if (localStorage.username) {
    username = localStorage.username;
};
let room = "#general";
if (localStorage.room) {
    room = localStorage.room;
};

let chatroom = new Chatroom(room, username); // Chatroom class object
let chatUI = new ChatUI(ul); // ChatUI class object

chatroom.getChats(data => {
    chatUI.templateLi(data)
});

// Send message
// Click button
sendBtn.addEventListener("click", e => {
    e.preventDefault();
    if (sendInput.value != "") {
        chatroom.addChat(sendInput.value)
    }
    else {
        return
    };
    sendInput.value = "";
});

// Enter key
sendInput.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.key === "Enter" && sendInput.value != "") {
        chatroom.addChat(sendInput.value)
    }
    else {
        return
    }
    sendInput.value = "";
});

// Update username
// Click button
let timer;
updateBtn.addEventListener("click", e => {
    e.preventDefault();
    let newUser = updateInput.value;
    if (newUser != "" && newUser.length >= 2 && newUser.length <= 10) {
        chatroom.username = newUser;
        // Set new user in localStorage
        localStorage.setItem("username", newUser);
        // Write new user on page
        userUpdated.innerHTML = `<p id="userUpdatedP">${newUser}</p>`;
        clearTimeout(timer);
        timer = setTimeout(() => {
            userUpdated.style.display = "none";
        }, 3000)
    }
    else {
        chatroom.username = newUser;
    }
    updateInput.value = "";
    location.reload();
});

// Enter key
updateInput.addEventListener("keyup", e => {
    e.preventDefault()
    let newUser = updateInput.value;
    if (e.key === "Enter") {
        if (newUser != "" && newUser.length >= 2 && newUser.length <= 10) {
            chatroom.username = newUser;
            // Set new user in localStorage
            localStorage.setItem("username", newUser);
            // Write new user on page
            userUpdated.innerHTML = `<p id="userUpdatedP">${newUser}</p>`;
            clearTimeout(timer);
            timer = setTimeout(() => {
                userUpdated.innerHTML = "";
            }, 3000)
        }
        else {
            chatroom.username = newUser;
        }
    }
    else {
        return
    }
    updateInput.value = "";
    location.reload();
});

// Select room
navBtn.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        let newRoom = e.target.id;
        // Set new room in localStorage
        localStorage.setItem("room", newRoom);
        let latestRoom = localStorage.getItem("room")
        chatroom.updateRoom(latestRoom);
        chatUI.list.innerHTML = "";
        chatroom.getChats(data => {
            chatUI.templateLi(data)
        });
    };
});

// Style the current room button
let currentRoom;
roomBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        if (currentRoom) {
            currentRoom.style.backgroundColor = '';
        }
        currentRoom = this;
        this.style.backgroundColor = '#ffc26d';
    });
});