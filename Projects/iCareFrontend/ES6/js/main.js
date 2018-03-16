
function GET(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    return xhr.responseText;
    return JSON.parse((xhr.responseText));
}







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

    showNotificationPopup();
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
                            <a href="/pages/alerts.html" class="alert-link">You have new unread notifications <span class="badge">${unreadCount}</span> </a>
                          </div>
                 
                          `

    let element = document.getElementById('notification-container')
    if (element) element.innerHTML = html



}


