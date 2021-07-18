// Selects Bill Input Section

const billAmountInput = document.querySelector(".bill-input-div input");
const billAmount = billAmountInput.value;


//Selects Percentage Buttons

const percent5 = document.querySelector(".percent5");

const percent10 = document.querySelector(".percent10");

const percent15 = document.querySelector(".percent15");

const percent25 = document.querySelector(".percent25");

const percent50 = document.querySelector(".percent50");

//Selects Custom Tip input

const customTipInput = document.querySelector("#custom-tip");
const customTip = customTipInput.value;


//Selects Number of People input

const numPeopleInput = document.querySelector("#people-amount");
const numPeople = numPeopleInput.value;

//Selects Tip Amount Output

const tipOutput = document.querySelector(".tip-output-half span");

//Selects Total Amount Output

const totalAmountOutput = document.querySelector(".total-output-half span");

//Selects Reset Button

const resetButton = document.querySelector(".reset-button");

let tipMultiplier = 0;

//===========================================================

//   Adds Event Listener for "Enter" Button

document.addEventListener("keydown", function (e) {
  //console.log(e);
  if (e.key === "Enter") {

  }
});

//=========================================================

//  Adds Event Listener for Tip Buttons
