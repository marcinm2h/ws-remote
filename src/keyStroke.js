const { exec } = require("child_process");

const stroke = () => exec("xdotool key Left");

export const left = () => stroke("Left");
export const right = () => stroke("Right");
