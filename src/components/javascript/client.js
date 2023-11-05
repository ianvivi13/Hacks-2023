const ws = new WebSocket('ws://10.64.136.48:3000')
ws.onopen = () => {
    console.log('ws opened on browser')
}

ws.onmessage = (message) => {
    if(message.data == 2) {
        next = true;
    }
}

var next = false;
var pressedButton = false;

setInterval(function(){
    waitForAdmin();
}, 500);

function waitForAdmin() {
    if(next) {
        showButtons();
        document.getElementById("header__waiting").style.visibility = 'hidden';
        document.getElementById("header__victim").style.visibility = 'hidden';
        next = false;
        pressedButton = false
    } if(pressedButton) {
        hideButtons();
        document.getElementById("header__waiting").style.visibility = 'visible';
        document.getElementById("header__victim").style.visibility = 'visible';
    }
}

function incLever() {
    ws.send('1');
    hideButtons();
    pressedButton = true;
}

function incNoLever() {
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
