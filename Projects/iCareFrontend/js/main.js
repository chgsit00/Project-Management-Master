// import moment from "../node_modules/moment/min/moment-with-locales"


function GET(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    return xhr.responseText;
    return JSON.parse((xhr.responseText));
}

function POST(url, body) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/json-handler");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));

    return xhr.responseText;
    return JSON.parse((xhr.responseText));
}



let Inhabitants = GET("http://localhost:8080/inhabitant")
Inhabitants = JSON.parse(Inhabitants)

let InhabitantNames = Inhabitants.map(i => {
    return {
        name: i.name,
        id: i.id
    }
})





function GetSideWideVm() {
    return JSON.parse(localStorage.getItem('sideWideVm'));

}

function SetSideWideVm(sideWideVm) {
    localStorage.setItem('sideWideVm', JSON.stringify(sideWideVm));
}

function resetSideWideVm() {
    let sideWideVm = {
        unreadNotifications: [
            {
                message: "hello",
                sender: "peter",
                roomId: 2,
                severity: "red"
            },
            {
                message: "peace",
                sender: "pan",
                roomId: 2,
                severity: "yellow"
            }
        ]
    }
    SetSideWideVm(sideWideVm)
}

// resetSideWideVm()

if (!localStorage.getItem('sideWideVm')) {
    resetSideWideVm()
}


setInterval(notificationPoller, 1000);

function notificationPoller() {
    updateUnreadNotifications();
    showNotificationPopup();
}

function updateUnreadNotifications() {
    let json = GET("http://localhost:8080/notification/new");
    json = JSON.parse(json);
    let vm = GetSideWideVm();
    
    json.map(newN => {
        console.log(newN.notificationId)
        let found = vm.unreadNotifications.find(n => n.notificationId === newN.notificationId)
        if(!found)
            vm.unreadNotifications.push(newN);
    });
    SetSideWideVm(vm);
}

function showNotificationPopup() {
    
    let unreadCount = GetSideWideVm().unreadNotifications.length
    if (unreadCount == 0) {
        let element = document.getElementById('notification-container')
        if (element) element.innerHTML = ""
        return;
    }
    let html = `
    <div class=" notification alert alert-danger" role="alert">
                            <a href="/pages/alerts.html" class="alert-link">Unread notifications <span class="badge">${unreadCount}</span> </a>
                          </div>
                 
                          `

    let element = document.getElementById('notification-container')
    if (element) element.innerHTML = html



}


