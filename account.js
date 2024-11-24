document.getElementById('patientProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const picture = document.getElementById('profilePicture').value ? "נבחרה תמונה" : "לא נבחרה תמונה";

    alert(`פרופיל נוצר בהצלחה!\nשם: ${fullName}\nאימייל: ${email}\nתמונה: ${picture}`);
    this.reset();
});
document.getElementById('patientProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const picture = document.getElementById('profilePicture').value ? "נבחרה תמונה" : "לא נבחרה תמונה";

    alert(`פרופיל נוצר בהצלחה!\nשם: ${fullName}\nאימייל: ${email}\nתמונה: ${picture}`);
    this.reset();
    document.getElementById('profilePreview').style.display = 'none';
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('progressBar').innerText = '0%';
});

document.getElementById('profilePicture').addEventListener('change', function () {
    const file = this.files[0];
    const preview = document.getElementById('profilePreview');
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.querySelectorAll('.form-control, .form-select').forEach(field => {
    field.addEventListener('input', updateProgressBar);
});

function updateProgressBar() {
    const fields = document.querySelectorAll('.form-control, .form-select');
    const filledFields = Array.from(fields).filter(field => field.value.trim() !== '');
    const progress = Math.round((filledFields.length / fields.length) * 100);

    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${progress}%`;
    progressBar.innerText = `${progress}%`;
}
