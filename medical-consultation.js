const messages = [
    { type: "sent", content: "שלום, דוקטור, אני זקוק לעזרה" },
    { type: "received", content: "שלום, מה אוכל לעזור?" }
];

function displayChat() {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.innerHTML = "";
    messages.forEach(msg => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", msg.type);
        messageElement.innerHTML = `<div class="content">${msg.content}</div>`;
        chatWindow.appendChild(messageElement);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("messageInput");
    const content = input.value.trim();
    if (content) {
        messages.push({ type: "sent", content });
        displayChat();
        input.value = "";
        setTimeout(() => {
            messages.push({ type: "received", content: "תודה על פנייתך, נחזור אליך בהקדם!" });
            displayChat();
        }, 1000);
    }
}

document.addEventListener("DOMContentLoaded", displayChat);
