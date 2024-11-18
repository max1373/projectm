// הודעות ראשוניות
const messages = [
    { type: "sent", content: "שלום, דוקטור, אני זקוק לעזרה" },
    { type: "received", content: "שלום, מה אוכל לעזור?" }
];

// פונקציה להצגת הצ'אט
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

// פונקציה לשליחת הודעה
function sendMessage() {
    const input = document.getElementById("messageInput");
    const content = input.value.trim();
    if (content) {
        // הוספת הודעה שנשלחה
        messages.push({ type: "sent", content });
        displayChat();
        input.value = "";

        // תגובה אוטומטית
        setTimeout(() => {
            messages.push({ type: "received", content: "תודה על פנייתך, נחזור אליך בהקדם!" });
            displayChat();
        }, 1000);
    }
}

// הצגת צ'אט בעת טעינת הדף
document.addEventListener("DOMContentLoaded", displayChat);
