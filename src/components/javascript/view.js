const ws = new WebSocket('ws://localhost:3000')
ws.onopen = () => {
    console.log('ws opened on browser')
}

// Sends a '2' to the server when beginning the session
function startSession() {
    ws.send("2");
    window.location.href = "../admin.html";
}