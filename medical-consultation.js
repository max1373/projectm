// הודעות ראשוניות
const messages = [
    { type: "received", content: "שלום! אני הבוט הרפואי שלך. איך אני יכול לעזור?" }
];

// סדרת שאלות מהבוט
const botQuestions = [
    "איך אתה מרגיש היום?",
    "מה קרה לך?",
    "מתי התחילו התסמינים?",
    "האם יש לך בעיות רפואיות קודמות?"
];

let questionIndex = 0;

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

        // תגובה אוטומטית מהבוט
        setTimeout(() => {
            if (questionIndex < botQuestions.length) {
                messages.push({ type: "received", content: botQuestions[questionIndex] });
                questionIndex++;
            } else {
                messages.push({ type: "received", content: "תודה על התשובות! אם יש עוד שאלות, אני כאן." });
            }
            displayChat();
        }, 1000);
    }
}

// ניקוי הודעות בעת יציאה מהעמוד
window.addEventListener("beforeunload", () => {
    messages.length = 0;
    questionIndex = 0;
});

// הצגת צ'אט בעת טעינת הדף
document.addEventListener("DOMContentLoaded", displayChat);
