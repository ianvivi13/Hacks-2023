const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => {
    console.log('ws opened on browser')
}

ws.onmessage = (message) => {
    if(message.data == 0) {
        incNoLeverCount();
    } else if(message.data == 1) {
        incLeverCount();
    }
}

var count = 0;
var leverCount = 0;
var noLeverCount = 0;

function changeImg() {
    count++;
    document.getElementById("problem").src = "../assets/created-problems/trolley-problem-" + count + ".png";
    document.getElementById("no-lever").innerHTML = "0";
    document.getElementById("lever").innerHTML = "0";
    leverCount = 0;
    noLeverCount = 0;
    ws.send("2");
}

function incLeverCount() {
    leverCount++;
    document.getElementById("lever").innerHTML = leverCount.toString();
}

function incNoLeverCount() {
    noLeverCount++;
    document.getElementById("no-lever").innerHTML = noLeverCount.toString();
}

function endSession() {
    if(confirm("End the current session?")) {
        window.location.href = "index.html";
    }
}