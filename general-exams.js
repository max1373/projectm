// רשימת בדיקות לדוגמה
const exams = [
    {
        name: "בדיקת דם כללית",
        description: "בדיקה להערכת כלל מרכיבי הדם (המוגלובין, תאי דם ועוד).",
        buttonLabel: "קביעת תור"
    },
    {
        name: "בדיקת אולטרסאונד",
        description: "הדמיה לא פולשנית של איברי הגוף לצורך אבחון.",
        buttonLabel: "קביעת תור"
    }
];

// פונקציה להצגת הבדיקות
function populateExams() {
    const examsList = document.getElementById("examsList");

    exams.forEach(exam => {
        const item = document.createElement("div");
        item.classList.add("list-group-item");

        item.innerHTML = `
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${exam.name}</h5>
                <button class="btn btn-outline-primary btn-sm" onclick="scheduleExam('${exam.name}')">
                    <i class="fas fa-calendar-plus"></i> ${exam.buttonLabel}
                </button>
            </div>
            <p class="mb-1">${exam.description}</p>
        `;
        examsList.appendChild(item);
    });
}

// פונקציה לדוגמה לקביעת תור (ניתן להרחיב אותה)
function scheduleExam(examName) {
    alert(`תור ל-${examName} נקבע בהצלחה!`);
}

// קריאה לפונקציה בעת טעינת הדף
document.addEventListener("DOMContentLoaded", populateExams);
