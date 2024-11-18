// שדרוג פונקציית קביעת תור
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    alert(`תור לשירות ${service} נקבע בהצלחה בתאריך ${date} בשעה ${time}`);
});

// כפתור תרגום
document.getElementById('translateBtn').addEventListener('click', function () {
    const translations = {
        hebrew: {
            headerTitle: "ברוך הבא לאתר קופת חולים",
            footerText: "© כל הזכויות שמורות לקופת חולים 2024"
        },
        english: {
            headerTitle: "Welcome to the Clinic Website",
            footerText: "© All rights reserved to the clinic 2024"
        }
    };

    const currentLanguage = document.body.getAttribute("lang") === "he" ? "hebrew" : "english";
    const newLanguage = currentLanguage === "hebrew" ? "english" : "hebrew";
    document.body.setAttribute("lang", newLanguage === "hebrew" ? "he" : "en");

    const t = translations[newLanguage];
    document.querySelector('.header-section h1').innerText = t.headerTitle;
    document.querySelector('footer p').innerText = t.footerText;
});
// פתיחת מחשבון סימפטומים
function openSymptomChecker() {
    alert("מחשבון התסמינים יושק בקרוב!");
}

// הצגת שאלות נפוצות
function showFAQ() {
    alert("שאלות ותשובות יתווספו בקרוב!");
}

// הצגת התראות
function showNotifications() {
    alert("אין התראות חדשות כרגע.");
}
