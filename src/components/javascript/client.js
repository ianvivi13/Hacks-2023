const ws = new WebSocket('ws://10.127.3.156:3000')
ws.onopen = () => {
    console.log('ws opened on browser')
}

// If the message received is a '2', the admin has moved to the next problem
ws.onmessage = (message) => {
    if(message.data == 2) {
        next = true;
    }
}

var next = false;
var pressedButton = false;

// Call waitForAdmin() every 500ms
setInterval(function(){
    waitForAdmin();
}, 500);

// Checks to see if the admin has done anything or if the client has pressed a button
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

// Sends a '1' to the server if the "Pull Lever" button is pressed
function incLever() {
    ws.send('1');
    hideButtons();
    pressedButton = true;
}

// Sends a '0' to the server if the "Don't Pull Lever" button is pressed
function incNoLever() {
    ws.send('0');
    hideButtons();
    pressedButton = true;
}

// Hides and disables each of the buttons
function hideButtons() {
    document.getElementById("no-lever-button").disabled = true;
    document.getElementById("no-lever-button").style.visibility = "hidden";
    document.getElementById("lever-button").disabled = true;
    document.getElementById("lever-button").style.visibility = "hidden";
}

// Shows and enables each of the buttons
function showButtons() {
    document.getElementById("no-lever-button").disabled = false;
    document.getElementById("no-lever-button").style.visibility = "visible";
    document.getElementById("lever-button").disabled = false;
    document.getElementById("lever-button").style.visibility = "visible";
}
