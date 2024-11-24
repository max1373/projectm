document.getElementById('patientProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const idNumber = document.getElementById('idNumber').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;

    alert(`פרופיל נוצר בהצלחה עבור ${fullName}.\nפרטי אימייל: ${email}`);
    this.reset();
});
