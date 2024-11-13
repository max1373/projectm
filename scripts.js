// max.js

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    alert(`תור לשירות ${service} נקבע בהצלחה בתאריך ${date} בשעה ${time}`);
});

function showMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
}

function showServiceDetails(service) {
    alert(`מידע נוסף על שירות ${service}`);
}

function contactSupport() {
    alert("פניה לתמיכה נשלחה בהצלחה! ניצור עמך קשר בהקדם.");
}


// max.js

document.getElementById('patientProfileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const idNumber = document.getElementById('idNumber').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;

    alert(`פרופיל עבור ${fullName} נוצר בהצלחה!`);
    // ניתן להוסיף קוד לשמירת המידע בשרת או ב-LocalStorage
});
