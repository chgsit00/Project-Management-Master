const FRAMERATE = 15
const CANVAS_W = 1200
const CANVAS_H = 350
const corridorHeight = 50
const roomWidth = 130
const houseHeight = 300
const inhabitantSize = 20
const offset = 10;
const eatingRoomWidth = 300;




let mainVM = {
    lastDrawnInfoOf: null,
    inhabitants: [
        {
            id: "dm123",
            name: "Dennis Müller",
            hearthRate: 120,
            position: {
                x: 100,
                y: 200
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
                x: 500,
                y: 200
            },
            restrictions: [
                
            ],
            healthCheck: {
                message: "dead",
                status: "red"
            }
        }
    ]

}



function drawInhabitant(i) {
    let x = i.position.x,
        y = i.position.y,
        isSel = null,
        col = color(0,255,0)

    switch (i.healthCheck.status) {
        case "red":
            col = color(255,0,0)
            break;
    
        case "yellow":
            col = color(255,200,0)
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
        mainVM.selected = i})
    return true;
}

function draw() {

    mainVM.inhabitants.forEach(i => {
        i.position.x += (Math.random(1)-0.5)
        i.position.y += (Math.random(1)-0.5)
    })

    drawHouse();

    mainVM.inhabitants.forEach(i => {
        drawInhabitant(i)
    });

    updateSelectionInfoBox();
    





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

function updateSelectionInfoBox() {
    if (mainVM.lastDrawnInfoOf !== mainVM.selected) {
        mainVM.lastDrawnInfoOf = mainVM.selected;
        
        if (mainVM.selected) {
            let i = mainVM.selected
            document.getElementById("sel-name").innerHTML = i.name
            document.getElementById("sel-id").innerHTML = i.id
            document.getElementById("sel-hearth").innerHTML = i.hearthRate
            let labelclass = "label label-Success"
            switch (i.healthCheck.status) {
                case "red":   
                    labelclass = "label label-danger"                
                    break;
                case "yellow":   
                    labelclass = "label label-warning"                
                    break;
            
                default:
                    break;
            }

            document.getElementById("sel-health").innerHTML = 
            `<span class="${labelclass}">${i.healthCheck.message}</span>`
            document.getElementById("sel-restrictions").innerHTML = i.restrictions[0]
      
        }
        else {
            document.getElementById("sel-name").innerHTML = ""
            document.getElementById("sel-id").innerHTML =""
            document.getElementById("sel-hearth").innerHTML =""
            document.getElementById("sel-health").innerHTML = ""
            document.getElementById("sel-restrictions").innerHTML = ""
        }
    }
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
