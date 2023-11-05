const ws = new WebSocket('wss://10.64.136.48:3000')
/*ws.onopen = () => {
    console.log('ws opened on browser')
}

ws.onmessage = (message) => {
    if(message.data == 2) {
        next = true;
    }
}*/

var next = false;
var pressedButton = false;

setInterval(function(){
    waitForAdmin();
}, 500);

function waitForAdmin() {
    // (if start has not been pressed in view) || (if next has not been pressed yet && user has incremented a value), hide buttons
    // NOT FINISHED
    if(next) {
        showButtons();
        next = false;
        pressedButton = false
    } if(pressedButton) {
        hideButtons();
    }
}

function incLever() {
    // increment lever variable in host
    ws.send('1');
    hideButtons();
    pressedButton = true;
}

function incNoLever() {
    // increment no lever variable in host
    ws.send('0');
    hideButtons();
    pressedButton = true;
}

function hideButtons() {
    document.getElementById("no-lever-button").disabled = true;
    document.getElementById("no-lever-button").style.visibility = "hidden";
    document.getElementById("lever-button").disabled = true;
    document.getElementById("lever-button").style.visibility = "hidden";
}

function showButtons() {
    document.getElementById("no-lever-button").disabled = false;
    document.getElementById("no-lever-button").style.visibility = "visible";
    document.getElementById("lever-button").disabled = false;
    document.getElementById("lever-button").style.visibility = "visible";
}
