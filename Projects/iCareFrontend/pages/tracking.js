const FRAMERATE = 15
SCALE = 2.7
UPDATE_AND_POLL_TIME = 2000 // delay in ms between new GETTER
corridorHeight = 10 * SCALE
roomWidth = 50 * SCALE
houseHeight = 100 * SCALE
inhabitantSize = 20
offset = 10;
eatingRoomWidth = 100 * SCALE
CANVAS_W = roomWidth * 5 + eatingRoomWidth + offset * 2
CANVAS_H = houseHeight + offset * 2




setInterval(updateVm, UPDATE_AND_POLL_TIME);
setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


let mockData = [
    {
        id: "dm123",
        name: "Dennis Müller",
        hearthRate: 120,
        position: {
            x: 40,
            y: 90
        },
        restrictions: [
            "entranceForbidden"
        ],
        healthCheck: {
            message: "string",
            status: "yellow"
        }
    },
    {
        id: "neue",
        name: "Fritz Müller",
        hearthRate: 110,
        position: {
            x: 190,
            y: 10
        },
        restrictions: [

        ],
        healthCheck: {
            message: "dead",
            status: "red"
        }
    }
]

let mainVM = {
    lastDrawnInfoOf: null,
    inhabitants: []

}

updateVm()



function drawInhabitant(i) {
    let x = i.position.x,
        y = i.position.y,
        isSel = null,
        col = color(0, 255, 0)

    switch (i.healthCheck.status) {
        case "RED":
            col = color(255, 0, 0)
            break;

        case "YELLOW":
            col = color(255, 200, 0)
            break;

        default:
            break;
    }
    fill(col);

    if (mainVM.selected && i.id === mainVM.selected.id) {
        isSel = true
    }

    if (isSel) {
        strokeWeight(6);
        stroke(color(100))
    }
    else {
        strokeWeight(1);
        stroke(color(100, 100, 100))
    }

    ellipse(x, y, inhabitantSize, inhabitantSize)
}

function createRoom(name, x, y, w, h) {
    let mono = 240
    const roomColor = color(mono, mono, mono);
    mono = 120
    const roomColorBorder = color(mono, mono, mono);

    fill(roomColor);
    strokeWeight(1);
    stroke(roomColorBorder)
    rect(x, y, w, h)


    textAlign(CENTER);
    textSize(16);
    noStroke()
    fill(color(100, 100, 100))

    text(name, x + w / 2, y + h / 2 + 5);

}

function setup() {
    var canvas = createCanvas(CANVAS_W, CANVAS_H)
    frameRate(FRAMERATE)
    canvas.parent('sketch-holder');
}



function GetClickedInhabitant(action) {
    // const boardSizeInPixel = SIZE_BOARD * TILE_SIZE;
    if (mouseX > CANVAS_W || mouseY > CANVAS_H)
        return
    if (mouseX < 0 || mouseY < 0)
        return

    // const x = int(mouseX / TILE_SIZE);
    // const y = int(mouseY / TILE_SIZE);
    let found = mainVM.inhabitants.find(i => {

        return i.position.x - inhabitantSize / 2 < mouseX
            && i.position.x + inhabitantSize / 2 > mouseX &&
            i.position.y - inhabitantSize / 2 < mouseY
            && i.position.y + inhabitantSize / 2 > mouseY

        // &&
        //     i.position.y > mouseY && i.position.y < mouseY + inhabitantSize
    })

    action(found)


}


function mouseClicked() {
    GetClickedInhabitant(i => {
        mainVM.selected = i
    })
    updateSelectionInfoBox();
    return true;
}



function updateVm() {
    var json = GET("http://localhost:8080/inhabitant");
    json = JSON.parse(json)
    
    let inhabitantsVms = json.map(i => {
        return {
            id: i.id,
            name: i.name,
            hearthRate: i.heartRate,
            position: {
                x: offset + i.position.x * SCALE,
                y: offset + i.position.y * SCALE
            },
            restrictions: i.restrictions,
            healthCheck: {
                message: i.healthCheck.message,
                status: i.healthCheck.status
            }
        }
    })
    if(mainVM.selected)
        mainVM.selected = inhabitantsVms.find(i => i.id == mainVM.selected.id)


    mainVM.inhabitants = inhabitantsVms
    updateSelectionInfoBox();
    

}

function draw() {
    background(220)

    drawHouse();

    mainVM.inhabitants.forEach(i => {
        drawInhabitant(i)
    });







    // drawInhabitant(100, 200, true, color(200, 00, 0))



    // strokeWeight(2);
    // stroke(roomColorBorder)

    // if (mouseIsPressed) {
    //     fill(0);
    // } 
    // noFill()
    // stroke(10)
    // ellipse(mouseX, mouseY, 40, 40);
}


function smartUpdate(id, value) {
    let element = document.getElementById(id)
    if (element.innerHTML !== value)
        element.innerHTML = value
}

function updateSelectionInfoBox() {
    // if (mainVM.lastDrawnInfoOf !== mainVM.selected) {
    //     mainVM.lastDrawnInfoOf = mainVM.selected;

    if (mainVM.selected) {
        let i = mainVM.selected
        smartUpdate("sel-name", i.name)
        smartUpdate("sel-id", i.id)
        smartUpdate("sel-hearth", i.hearthRate)
        console.log(i.hearthRate);
        

        let labelclass = "label label-success"
        switch (i.healthCheck.status) {
            case "RED":
                labelclass = "label label-danger"
                break;
            case "YELLOW":
                labelclass = "label label-warning"
                break;
            default:
                break;
        }

        smartUpdate("sel-health", `<span class="${labelclass}">${i.healthCheck.message}</span>`)
        smartUpdate("sel-restrictions", i.restrictions[0])

    }
    else {
        document.getElementById("sel-name").innerHTML = ""
        document.getElementById("sel-id").innerHTML = ""
        document.getElementById("sel-hearth").innerHTML = ""
        document.getElementById("sel-health").innerHTML = ""
        document.getElementById("sel-restrictions").innerHTML = ""
    }
    // }
}

function drawHouse() {

    const roomHeight = houseHeight / 2 - corridorHeight / 2;
    const besideEating = offset + eatingRoomWidth;
    const lowerRoomsY = offset + houseHeight / 2 + corridorHeight / 2;
    createRoom("eating room", offset, offset, eatingRoomWidth, houseHeight);
    createRoom("corridor", offset + eatingRoomWidth, offset + houseHeight / 2 - corridorHeight / 2, 5 * roomWidth, corridorHeight);
    createRoom("", besideEating + roomWidth * 2 + roomWidth / 2 - 20, 2, 40, 8);
    createRoom("room 1", besideEating, offset, roomWidth, roomHeight);
    createRoom("room 3", besideEating + roomWidth, offset, roomWidth, roomHeight);
    createRoom("entrance", besideEating + roomWidth * 2, offset, roomWidth, roomHeight);
    createRoom("room 6", besideEating + roomWidth * 3, offset, roomWidth, roomHeight);
    createRoom("room 8", besideEating + roomWidth * 4, offset, roomWidth, roomHeight);
    createRoom("room 2", besideEating, lowerRoomsY, roomWidth, roomHeight);
    createRoom("room 4", besideEating + roomWidth, lowerRoomsY, roomWidth, roomHeight);
    createRoom("room 5", besideEating + roomWidth * 2, lowerRoomsY, roomWidth, roomHeight);
    createRoom("room 7", besideEating + roomWidth * 3, lowerRoomsY, roomWidth, roomHeight);
    createRoom("room 9", besideEating + roomWidth * 4, lowerRoomsY, roomWidth, roomHeight);
}
