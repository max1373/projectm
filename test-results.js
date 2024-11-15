const testResults = [
    { date: "2024-10-01", result: "סוכר בדם: 90 mg/dL", status: "תקין", statusClass: "bg-success" },
    { date: "2024-09-15", result: "כולסטרול: 210 mg/dL", status: "גבוה", statusClass: "bg-warning" }
];

function populateTable() {
    const tableBody = document.getElementById("testResults");
    testResults.forEach(test => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${test.date}</td>
            <td>${test.result}</td>
            <td><span class="badge ${test.statusClass}">${test.status}</span></td>
            <td>
                <a href="#" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="showDetails('${test.date}', '${test.result}', '${test.status}')">
                    <i class="fas fa-eye"></i> צפייה
                </a>
                <a href="#" class="btn btn-outline-primary btn-sm"><i class="fas fa-file-download"></i> הורדה</a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function showDetails(date, result, status) {
    document.getElementById("modalDate").textContent = date;
    document.getElementById("modalResult").textContent = result;
    document.getElementById("modalStatus").textContent = status;
}

document.addEventListener("DOMContentLoaded", populateTable);
