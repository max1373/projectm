document.getElementById('patientProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const picture = document.getElementById('profilePicture').value ? "נבחרה תמונה" : "לא נבחרה תמונה";

    alert(`פרופיל נוצר בהצלחה!\nשם: ${fullName}\nאימייל: ${email}\nתמונה: ${picture}`);
    this.reset();
});
