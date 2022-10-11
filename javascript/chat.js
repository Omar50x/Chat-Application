const form = document.querySelector(".typing-area"),
inputField = document.querySelector(".input-field"),
sendBtn = document.querySelector("button");

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
            }
        }
    }

    // We have to send the form data through ajax to php
    let formData = new FormData(formId); /* Creating new formData object */
    xhr.send(formData); /* Sending the form data to php */
}