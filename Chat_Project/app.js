import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chat2 = new Chatroom("#js", "userName3");
// console.log(chat2.username, chat2.room); // Testiram getere
// chat2.username = "Dušan"; // Testiram seter za username
// console.log(chat2.username);
// chat2.room = "#general"; // Testiram seter za room
// console.log(chat2.room);
// console.log(chat2.chats);

// chat2.addChat("Drugi dan Chat Projekta")
//     .then(() => {
//         console.log("Message successfully added");
//     })
//     .catch((e) => {
//         console.error("Error " + e);
//     });

chat2.getChats(data => {
    console.log(data);
});

////////////////////////////////////////////////

let ul = document.querySelector('ul');
let chatUI1 = new ChatUI(ul);
console.log(chatUI1.list);

chat2.getChats(data => {
    chatUI1.templateLi(data)
})
