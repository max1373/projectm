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

// פונקציה למילוי הרשימה של הבדיקות
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

// פונקציה לטיפול בקביעת תור
function scheduleExam(examName) {
    const examDate = prompt(`בחר תאריך עבור ${examName} (לדוגמה: 2024-12-01):`);

    if (examDate) {
        document.getElementById("examDateConfirmation").textContent = examDate;
        document.getElementById("examConfirmation").style.display = "block";
    } else {
        alert("לא נבחר תאריך.");
    }
}

// קריאה לפונקציה בעת טעינת הדף
document.addEventListener("DOMContentLoaded", populateExams);
// מערך של בדיקות כלליות
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
    },
    {
        name: "בדיקת לחץ דם",
        description: "בדיקה למדידת לחץ הדם וסיוע בזיהוי בעיות לב וכלי דם.",
        buttonLabel: "קביעת תור"
    },
    {
        name: "בדיקת שתן",
        description: "בדיקה לגילוי זיהומים או בעיות בריאותיות נוספות.",
        buttonLabel: "קביעת תור"
    }
];

// פונקציה למילוי הרשימה של הבדיקות
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

// פונקציה לטיפול בקביעת תור
function scheduleExam(examName) {
    const examDate = prompt(`בחר תאריך עבור ${examName} (לדוגמה: 2024-12-01):`);

    if (examDate) {
        document.getElementById("examDateConfirmation").textContent = examDate;
        document.getElementById("examConfirmation").style.display = "block";
    } else {
        alert("לא נבחר תאריך.");
    }
}

// קריאה לפונקציה בעת טעינת הדף
document.addEventListener("DOMContentLoaded", populateExams);
// פונקציה לקביעת תור
function scheduleTest(testName) {
    const testDate = prompt(`בחר תאריך עבור ${testName} (לדוגמה: 2024-12-01):`);
    if (testDate) {
        alert(`תור ל-${testName} נקבע בהצלחה לתאריך ${testDate}!`);
    } else {
        alert("לא נבחר תאריך.");
    }
}
