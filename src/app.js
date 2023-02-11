/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuits = ["diamonds", "hearts", "spades", "clubs"];
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

  document.querySelectorAll("card").innerHTML = cardSuits[randomNumber];
  document.getElementById("cardValue").innerHTML =
    cardValue[Math.floor(Math.random() * 12)];

  console.log("Hello Rigo from the console!");
};
