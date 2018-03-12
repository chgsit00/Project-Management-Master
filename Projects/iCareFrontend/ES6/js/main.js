
function GET(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    return xhr.responseText;
    return JSON.parse((xhr.responseText));
}
