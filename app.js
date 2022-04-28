"use strict";
const bill = document.getElementById('bill');
let people = document.querySelector('.people');
let btn1 = document.querySelector(".btn");
let tipsPercentage = Array.from(document.getElementsByClassName("tips"))
let tipAmount = document.querySelector('.tipupdate')
let totalAmountPerPerson = document.querySelector('.tip-total1')
const closePopUp = document.querySelector('.close-error')

tipAmount.innerHTML = 0.00;
totalAmountPerPerson.innerHTML = 0.00;



let amount = bill.addEventListener('input', (e) => {
  amount = e.target.value;
})

let totalPersonOnTabble = people.addEventListener('input', (e) => {
  totalPersonOnTabble = e.target.value
  console.log(totalPersonOnTabble);
})


tipsPercentage.map(tips => {
  tips.addEventListener('click', (e) =>  {
    if(amount > 0 && totalPersonOnTabble > 0) {
      console.log(e.target.innerText);
      switch(e.target.innerText) {
        case "5%" : 
          tipAmount.innerHTML = (amount * 0.05).toFixed(2) 
          totalAmountPerPerson.innerHTML = ((parseFloat(amount) + parseFloat(amount*0.05))/totalPersonOnTabble).toFixed(2)
          document.querySelector('.tip5').classList.add('selected')
          document.querySelector('.tip10').classList.remove('selected')
          document.querySelector('.tip15').classList.remove('selected')
          document.querySelector('.tip25').classList.remove('selected')
          document.querySelector('.tip50').classList.remove('selected')
          break;
        case "10%" : 
          tipAmount.innerHTML = (amount * 0.1).toFixed(2);
          totalAmountPerPerson.innerHTML = ((parseFloat(amount) + parseFloat(amount*0.1))/totalPersonOnTabble).toFixed(2)
          document.querySelector('.tip5').classList.remove('selected')
          document.querySelector('.tip10').classList.add('selected')
          document.querySelector('.tip15').classList.remove('selected')
          document.querySelector('.tip25').classList.remove('selected')
          document.querySelector('.tip50').classList.remove('selected')
          break;
        case "15%" : 
          tipAmount.innerHTML = (amount * 0.15).toFixed(2);
          totalAmountPerPerson.innerHTML = ((parseFloat(amount) + parseFloat(amount*0.15))/totalPersonOnTabble).toFixed(2)
          document.querySelector('.tip15').classList.add('selected')
          document.querySelector('.tip5').classList.remove('selected')
          document.querySelector('.tip10').classList.remove('selected')
          document.querySelector('.tip25').classList.remove('selected')
          document.querySelector('.tip50').classList.remove('selected')
          break;
        case "25%" : 
          tipAmount.innerHTML = (amount * 0.25).toFixed(2);
          totalAmountPerPerson.innerHTML = ((parseFloat(amount) + parseFloat(amount*0.25))/totalPersonOnTabble).toFixed(2)
          document.querySelector('.tip25').classList.add('selected')
          document.querySelector('.tip5').classList.remove('selected')
          document.querySelector('.tip10').classList.remove('selected')
          document.querySelector('.tip15').classList.remove('selected')
          document.querySelector('.tip50').classList.remove('selected')
          break;
        case "50%" : 
          tipAmount.innerHTML = (amount * 0.5).toFixed(2);
          totalAmountPerPerson.innerHTML = ((parseFloat(amount) + parseFloat(amount*0.5))/totalPersonOnTabble).toFixed(2)
          document.querySelector('.tip50').classList.add('selected')
          document.querySelector('.tip5').classList.remove('selected')
          document.querySelector('.tip10').classList.remove('selected')
          document.querySelector('.tip15').classList.remove('selected')
          document.querySelector('.tip25').classList.remove('selected')
          break;
      }
    } else {
      document.querySelector('.error').classList.remove('hidden')
    }
  })
  btn1.addEventListener("click", function () {
    amount = 0;
    totalPersonOnTabble = 0;
    tipAmount.innerHTML = 0;
    totalAmountPerPerson.innerHTML = 0;
    bill.value = ""
    people.value = ""
  });
  
})

closePopUp.addEventListener('click', () => {
  document.querySelector('.error').classList.add('hidden')
})

// btn1.addEventListener("click", function () {
//   tipAmount.innerHTML = 0
//   totalAmountPerPerson.innerHTML = 0
//   bill.value = ""
//   people.value = ""
// });

