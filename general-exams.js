document.getElementById("examForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const examDate = document.getElementById("examDate").value;
    document.getElementById("examDateConfirmation").textContent = examDate;
    document.getElementById("examConfirmation").style.display = "block";
});
