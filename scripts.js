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
// פתיחת המודל בטעינת הדף
document.addEventListener('DOMContentLoaded', function () {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
});

// פונקציית התחברות (הדגמה)
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`ברוך הבא, ${email}!`);
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
// פתיחת המודל בטעינת הדף
document.addEventListener('DOMContentLoaded', function () {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
});

// פונקציית התחברות (הדגמה)
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`ברוך הבא, ${email}!`);
});

// כפתור תרגום כאייקון
document.getElementById('translateIcon').addEventListener('click', function () {
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
// פתיחת מודל יצירת קשר בלחיצה על הכפתור
document.getElementById('contactBtn').addEventListener('click', function () {
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.show();
});

// שליחת טופס יצירת קשר
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`תודה על פנייתך, ${name}! ניצור איתך קשר בכתובת: ${email}`);
    // איפוס הטופס וסגירת המודל
    this.reset();
    const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    contactModal.hide();
});
