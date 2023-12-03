const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => {
    console.log('ws opened on browser')
}

// If a '0' is received, one of the clients chose not to pull the lever
// If a '1' is received, one of the clients chose to pull the lever
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

// Moves to the next problem and resets the counts to 0
function changeImg() {
    count++;
    document.getElementById("problem").src = "../assets/created-problems/trolley-problem-" + count + ".png";
    document.getElementById("no-lever").innerHTML = "0";
    document.getElementById("lever").innerHTML = "0";
    leverCount = 0;
    noLeverCount = 0;
    ws.send("2");
}

// Increments the "Pulled Lever" value
function incLeverCount() {
    leverCount++;
    document.getElementById("lever").innerHTML = leverCount.toString();
}

// Increments the "Did Not Pull Lever Value
function incNoLeverCount() {
    noLeverCount++;
    document.getElementById("no-lever").innerHTML = noLeverCount.toString();
}

// End session confirmation and navigation
function endSession() {
    if(confirm("End the current session?")) {
        window.location.href = "index.html";
    }
}