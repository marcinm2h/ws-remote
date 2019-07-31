import { Client } from "./client.js";

const client = new Client(undefined, e => alert("Error occured"));

const $actionButtons = document.querySelector("[data-action-buttons]");
$actionButtons.addEventListener("click", e => {
  switch (e.target.dataset.action) {
    case "left":
      client.sendLeft();
      break;
    case "right":
      client.sendRight();
      break;
  }
});
