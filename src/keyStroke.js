const { exec } = require("child_process");

const stroke = key => exec(`xdotool key ${key}`);

const left = () => stroke("Left");
const right = () => stroke("Right");

module.exports = { left, right };
