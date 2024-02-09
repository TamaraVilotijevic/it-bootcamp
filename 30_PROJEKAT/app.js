import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

//DOM
let list = document.getElementById("list");
let inputMessage = document.getElementById("message");
let btnSend = document.getElementById("btnSend");
let inputUsername = document.getElementById("username");
let btnUpdate = document.getElementById("btnUpdate");
let navRooms = document.querySelector('nav');

let username = "anonymus";
if (localStorage.username) {
    username = localStorage.getItem("username");
}
let chatroom = new Chatroom("#general", username);
//chatroom.addchat('Hi');

let chatUI = new ChatUI(list);
chatroom.getChats(data => {
    chatUI.list.innerHTML += chatUI.templateLI(data);
});

btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    let message = inputMessage.value;
    if (message.trim() != '') {
        chatroom.addchat(message);
    }
    inputMessage.value = '';
});

btnUpdate.addEventListener("click", (e) => {
    e.preventDefault();
    username = inputUsername.value;
    chatroom.username = username;
    localStorage.setItem("username", username);
});

navRooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        let newRoom = e.target.textContent;
        chatroom.room = newRoom;
        chatUI.delete();
        chatroom.getChats(data => {
            chatUI.list.innerHTML += chatUI.templateLI(data);
        });
    }
});