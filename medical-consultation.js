// הודעות ראשוניות
const messages = [
    {
        type: "received",
        content: "שלום! אני הבוט הרפואי שלך. איך אני יכול לעזור?",
        profilePic: "https://via.placeholder.com/40?text=B"
    }
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

        const profilePic = document.createElement("img");
        profilePic.src = msg.profilePic || "https://via.placeholder.com/40?text=U";
        profilePic.alt = "תמונת פרופיל";
        profilePic.classList.add("profile-pic");

        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = msg.content;

        messageElement.appendChild(profilePic);
        messageElement.appendChild(content);

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
        messages.push({
            type: "sent",
            content,
            profilePic: "https://via.placeholder.com/40?text=U"
        });
        displayChat();
        input.value = "";

        // תגובה אוטומטית מהבוט
        setTimeout(() => {
            if (questionIndex < botQuestions.length) {
                messages.push({
                    type: "received",
                    content: botQuestions[questionIndex],
                    profilePic: "https://via.placeholder.com/40?text=B"
                });
                questionIndex++;
            } else {
                messages.push({
                    type: "received",
                    content: "תודה על התשובות! אם יש עוד שאלות, אני כאן.",
                    profilePic: "https://via.placeholder.com/40?text=B"
                });
            }
            displayChat();
        }, 1000);
    }
}

// הצגת הצ'אט בעת טעינת הדף
document.addEventListener("DOMContentLoaded", displayChat);
