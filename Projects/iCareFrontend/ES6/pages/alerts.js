
function updateTable() {
    // alert("hi")
    let tableContent = GetSideWideVm().unreadNotifications.map(n => {
        let type = "success";
        switch (n.severity) {
            case "red":
                type = "danger";
                break;
            case "yellow":
                type = "warning";
                break;
            default:
                break;
        }
        return `
    <tr class="${type}">
    <td >${n.sender}</td>   
    <td>${n.roomId}</td>
    <td>${n.message}</td>   
    </tr>
    `;
    });
    document.getElementById('alertsTableBody').innerHTML = tableContent.join("");
}


// setInterval(updateTable, 100)

function setToRead(events) {
    let newVM = GetSideWideVm()
    newVM.unreadNotifications = []
    SetSideWideVm(newVM)
    updateTable()
}