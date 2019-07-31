export class Client {
  // FIXME: get current local ip
  constructor(url = "ws://192.168.0.10:8283", handleError = () => {}) {
    try {
      this.connection = new WebSocket(url);
    } catch (e) {
      handleError(e);
    }
    this.connection.onerror = handleError;
  }
  sendLeft() {
    this.connection.send("LEFT");
  }
  sendRight() {
    this.connection.send("RIGHT");
  }
}
