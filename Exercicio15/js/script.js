import calculate from "./calculate.js";
import { click } from "./exports.js";
import copyToClipboard from "./exports.js";
import {
  handleButtonPress,
  handleClearButton,
  handleType,
} from "./keyHandlers.js";
import themeSwither from "./themeSwither.js";

const input = document.getElementById("input");
const resultInput = document.getElementById("result");

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);
document.getElementById("input").addEventListener("keydown", handleType);
document.getElementById("equal").addEventListener("click", calculate);

click();

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwither);
