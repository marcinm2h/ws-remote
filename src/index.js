const WebSocket = require("ws");
const stroke = require('./keyStroke');

const ws = new WebSocket.Server({ port: 8283 }); // FIXME: -> env

ws.on("connection", ws => {
  ws.send("hello from server!"); //FIXME: on message -> start client

  ws.on("message", message => {
    console.log(`Received message => ${message}`);
    if (message === 'LEFT') { // FIXME: messages.js
      stroke.left();
    }
    if (message === 'RIGHT') {
      stroke.right();
    }
  });
});
