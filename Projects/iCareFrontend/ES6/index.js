let sideVm = {
    recent: [
        {
            message: "hello",
            sender: "peter",
            roomId: 2,
            severity: "red"
        }
    ]
}

function updateTable() {
    // alert("hi")
    let tableContent = sideVm.recent.map(n => {
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
    <td>${n.roomId}</td>
    <td>${n.message}</td>   
    </tr>
    `;
    });
    document.getElementById('recentTableBody').innerHTML = tableContent.join("");
}

var json = GET("http://localhost:8080/notification");
json = JSON.parse(json)
sideVm.recent = json

setTimeout(updateTable, 1000)


var myVar = setInterval(myTimer, 1000);

function updateView() {
    let vm = GetSideWideVm();
    let alarms = vm.unreadNotifications.filter(n => n.severity === "RED");
    document.getElementById("alarmsPanelBody").innerHTML = `Alarms ${alarms.length} `;
}


updateView()

function myTimer() {
    // var d = new Date();
    updateView();





}