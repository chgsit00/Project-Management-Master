
function updateTable() {
    // alert("hi")
    let tableContent = GetSideWideVm().unreadNotifications.reverse().map(n => {
        let inhabitant = InhabitantNames.find(x => x.id === n.inhabitantId)

 

        let type = "success";
        switch (n.severity) {
            case "RED":
                type = "danger";
                break;
            case "YELLOW":
                type = "warning";
                break;
            default:
                break;
        }
        return `
    <tr class="${type}">
    <td >${n.sender}</td>   
    <td>${moment(n.timeStamp).format("ddd, h:mm A")}</td>    
    <td>${inhabitant.name}</td>
    <td>${n.roomId}</td>
    <td>${n.message}</td>   
    </tr>
    `;
    });
    document.getElementById('alertsTableBody').innerHTML = tableContent.join("");
}

setTimeout(updateTable, 1000)
// setInterval(updateTable, 100)

function setToRead(events) {
    let newVM = GetSideWideVm()
    newVM.unreadNotifications = []
    SetSideWideVm(newVM)
    updateTable()
}