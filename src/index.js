const WebSocket = require("ws");
const stroke = require('./keyStroke');

const ws = new WebSocket.Server({ port: 8283 });

ws.on("connection", ws => {
  ws.send("hello from server!");

  ws.on("message", message => {
    console.log(`Received message => ${message}`);
    if (message === 'LEFT') {
      stroke.left();
    }
    if (message === 'RIGHT') {
      stroke.right();
    }
  });
});
