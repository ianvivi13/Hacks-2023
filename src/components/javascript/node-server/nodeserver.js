const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Broadcasts a message to every connected client except the sender
wss.broadcast = function(data, sender) {
    wss.clients.forEach(function(client) {
        if (client !== sender) {
            client.send(data)
        }
    })
}

// If a message is received, broadcast it
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        wss.broadcast(`${message}`, ws);
    });
});
server.listen(3000, () => {
});