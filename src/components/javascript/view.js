const ws = new WebSocket('ws://10.64.136.48:3000')
ws.onopen = () => {
    console.log('ws opened on browser')
}

function startSession() {
    ws.send("2");
    window.location.href = "./server.html";
}