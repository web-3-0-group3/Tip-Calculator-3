"use strict";
const bill1 = document.querySelector(".bill");
const people = document.querySelector(".people-input");
const btn1 = document.querySelector(".btn");

btn1.addEventListener("click", function () {
  people.textContent = 0;
  bill1.textContent = 0;
});

//function myFunction() {
// document.getElementById("myForm").reset();
//}
