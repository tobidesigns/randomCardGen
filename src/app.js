/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuits = ["♦", "♥", "♠", "♣"];
const cardValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //write your code here
  const randomNumber = Math.floor(Math.random() * 4);
  const firstSpan = document.getElementById("top-suit");
  const secondSpan = document.getElementById("bottom-suit");
  if (randomNumber === 0 || randomNumber === 1) {
    firstSpan.style.color = "red";
    secondSpan.style.color = "red";
  }
  firstSpan.innerText = cardSuits[randomNumber];
  secondSpan.innerText = cardSuits[randomNumber];

  document.getElementById("cardValue").innerHTML =
    cardValue[Math.floor(Math.random() * 12)];
};
