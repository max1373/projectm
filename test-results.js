const testResults = [
    { date: "2024-10-01", result: "סוכר בדם: 90 mg/dL", status: "תקין", statusClass: "bg-success" },
    { date: "2024-09-15", result: "כולסטרול: 210 mg/dL", status: "גבוה", statusClass: "bg-warning" },
    { date: "2024-08-20", result: "לחץ דם: 140/90", status: "גבוה", statusClass: "bg-danger" }
];

// פונקציה להצגת התוצאות בטבלה
function populateTable() {
    const tableBody = document.getElementById("testResults");
    testResults.forEach(test => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${test.date}</td>
            <td>${test.result}</td>
            <td><span class="badge ${test.statusClass}">${test.status}</span></td>
            <td>
                <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="showDetails('${test.date}', '${test.result}', '${test.status}')">
                    <i class="fas fa-eye"></i> צפייה
                </button>
                <button class="btn btn-outline-primary btn-sm" onclick="downloadResult('${test.result}')">
                    <i class="fas fa-file-download"></i> הורדה
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// פונקציה להצגת פרטי בדיקה במודל
function showDetails(date, result, status) {
    document.getElementById("modalDate").textContent = date;
    document.getElementById("modalResult").textContent = result;
    document.getElementById("modalStatus").textContent = status;
}

// פונקציה להורדת קובץ תוצאות
function downloadResult(result) {
    alert(`הורדת את התוצאה: ${result}`);
}

document.addEventListener("DOMContentLoaded", populateTable);
