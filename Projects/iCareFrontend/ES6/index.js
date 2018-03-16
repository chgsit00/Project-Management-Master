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

var myVar = setInterval(myTimer, 1000);

function updateView() {
    let vm = GetSideWideVm();
    let alarms = vm.unreadNotifications.filter(n => n.severity === "red");
    document.getElementById("alarmsPanelBody").innerHTML = `Alarms ${alarms.length} `;
}

updateView()

function myTimer() {
    // var d = new Date();
    updateView(); 


    

    
}