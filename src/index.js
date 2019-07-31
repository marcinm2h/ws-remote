const WebSocket = require("ws");

const ws = new WebSocket.Server({ port: 8283 });

ws.on("connection", ws => {
  ws.send("hello from server!");

  ws.on("message", message => {
    console.log(`Received message => ${message}`);
  });
});
