const form = document.querySelector(".typing-area"),
inputField = document.querySelector(".input-field"),
sendBtn = document.querySelector("button"),
chatbox = document.querySelector(".chat-box");

formId.onsubmit = (e) => {
    e.preventDefault(); /* Preventing form from submitting */
}

sendBtn.onclick = () => {
    // Let's start Ajax
    let xhr = new XMLHttpRequest(); /* Creating XML object */
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                inputField.value = ""; /* Once message inserted into database then leave blank the input field */
                scrollToBottom();
            }
        }
    }

    // We have to send the form data through ajax to php
    let formData = new FormData(formId); /* Creating new formData object */
    xhr.send(formData); /* Sending the form data to php */
}

chatbox.onmouseenter = () => {
    chatbox.classList.add("active");
}
chatbox.onmouseleave = () => {
    chatbox.classList.remove("active");
}

setInterval(() => {
    // Let's start Ajax
    let xhr = new XMLHttpRequest(); /* Creating XML object */
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                chatbox.innerHTML = data;
                if (!chatbox.classList.contains("active")) { /* If active class not contains in chatbox tha scroll to bottom */
                scrollToBottom();
                }
            }
        }
    }
    // We have to send the form data through ajax to php
    let formData = new FormData(formId); /* Creating new formData object */
    xhr.send(formData); /* Sending the form data to php */
}, 500); /* This function will run frequently after 500ms */

function scrollToBottom() {
    chatbox.scrollTop = chatbox.scrollHeight;
}