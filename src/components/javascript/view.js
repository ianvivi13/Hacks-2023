const ws = new WebSocket('ws://localhost:3000')
ws.onopen = () => {
    console.log('ws opened on browser')
}

function startSession() {
    ws.send("2");
    window.location.href = "../admin.html";
}