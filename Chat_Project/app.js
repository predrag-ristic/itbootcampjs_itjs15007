import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let sendBtn = document.getElementById('sendBtn')
let sendInput = document.getElementById('send')
let updateBtn = document.getElementById('updateBtn')
let updateInput = document.getElementById('update')
let generalBtn = document.getElementById('general')
let jsBtn = document.getElementById('js')
let homeworkBtn = document.getElementById('homework')
let testsBtn = document.getElementById('tests')

let chatroom = new Chatroom("#js", "testUser");

// chatroom.getChats(data => {
//     console.log(data);
// });

let ul = document.querySelector('ul');
let chatUI = new ChatUI(ul);

chatroom.getChats(data => {
    chatUI.templateLi(data)
});

sendBtn.addEventListener("click", () => {
    if (sendInput.value != "") {
        chatroom.addChat(sendInput.value)
    }
    else {
        return
    };
    sendInput.value = "";
});

sendInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter" && sendInput.value != "") {
        chatroom.addChat(sendInput.value)
    }
    else {
        return
    }
    sendInput.value = "";
});

// updateBtn.addEventListener("click", () => {
//     if(updateInput.value != "") {
        
//     }
//     updateInput = "";
// })


// updateInput.addEventListener("keyup", (e) => {
//     if(e.key === "Enter") {
        
//     }
//     updateInput = "";
// })

// generalBtn.addEventListener("click", () => {
    
// })

// jsBtn.addEventListener("click", () => {
    
// })

// homeworkBtn.addEventListener("click", () => {
    
// })

// testsBtn.addEventListener("click", () => {

// })