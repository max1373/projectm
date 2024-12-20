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
// פונקציה לשליחת טופס צור קשר
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`תודה ${name}, פנייתך נשלחה בהצלחה! ניצור עמך קשר בכתובת ${email}`);
    // איפוס הטופס
    event.target.reset();
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    // יצירת הודעת הצלחה
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3';
    successMessage.innerHTML = `<strong>תודה ${name}!</strong> פנייתך נשלחה בהצלחה וניצור עמך קשר בהקדם.`;

    // הצגת ההודעה במודל
    const modalBody = document.querySelector('#contactModal .modal-body');
    modalBody.innerHTML = '';
    modalBody.appendChild(successMessage);

    // סגירת המודל לאחר 3 שניות
    setTimeout(() => {
        const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        contactModal.hide();
    }, 3000);
});
