const consultations = [
    { doctor: "ד\"ר לוי מיכאל", lastMessage: "הודעה קצרה מהשיחה האחרונה עם הרופא.", status: "ממתין לתשובה", time: "2 ימים" },
    { doctor: "ד\"ר רחל כהן", lastMessage: "תשובת הרופא מייעוץ קודם.", status: "נענו", time: "שבוע שעבר" }
];

function populateConsultations() {
    const doctorList = document.getElementById("doctorList");
    consultations.forEach(consult => {
        const item = document.createElement("a");
        item.classList.add("list-group-item", "list-group-item-action");
        item.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${consult.doctor}</h5>
                <small>${consult.time}</small>
            </div>
            <p class="mb-1">${consult.lastMessage}</p>
            <small>סטטוס: ${consult.status}</small>
        `;
        doctorList.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", populateConsultations);
