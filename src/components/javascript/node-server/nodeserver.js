const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.broadcast = function(data, sender) {
    wss.clients.forEach(function(client) {
        if (client !== sender) {
            client.send(data)
        }
    })
}

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        wss.broadcast(`${message}`, ws);
    });
});
server.listen(3000, () => {
});