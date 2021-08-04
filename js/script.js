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
const peopleValidatorSection = document.querySelector(".people-section span");
const peopleInputDiv = document.querySelector(".people-input-div");
console.log(peopleInputDiv);

//Selects Tip Amount Output

const tipOutput = document.querySelector(".tip-output-half span");

//Selects Total Amount Output

const totalAmountOutput = document.querySelector(".total-output-half span");

//Selects Reset Button

const resetButton = document.querySelector(".reset-button");

let tipMultiplier = 0;

//===========================================================

// Click events for tip Buttons

percent5.addEventListener("click", function() {
  if (percent5.classList.contains("active")) {
    percent5.classList.remove("active");
  } else {
    removeActive();
    percent5.classList.add("active");
  }
})

percent10.addEventListener("click", function() {
  if (percent10.classList.contains("active")) {
    percent10.classList.remove("active");
  } else {
    removeActive();
    percent10.classList.add("active");
  }
})

percent15.addEventListener("click", function() {
  if (percent15.classList.contains("active")) {
    percent15.classList.remove("active");
  } else {
    removeActive();
    percent15.classList.add("active");
  }
})

percent25.addEventListener("click", function() {
  if (percent25.classList.contains("active")) {
    percent25.classList.remove("active");
  } else {
    removeActive();
    percent25.classList.add("active");
  }
})

percent50.addEventListener("click", function() {
  if (percent50.classList.contains("active")) {
    percent50.classList.remove("active");
  } else {
    removeActive();
    percent50.classList.add("active");
  }
})


//===============================================

//Removes "active" class from tip Buttons

const removeActive = function () {
  if (percent5.classList.contains("active")) {
    percent5.classList.remove("active");
  } else if (percent10.classList.contains("active")) {
    percent10.classList.remove("active");
  } else if (percent15.classList.contains("active")) {
    percent15.classList.remove("active");
  } else if (percent25.classList.contains("active")) {
    percent25.classList.remove("active");
  } else if (percent50.classList.contains("active")) {
    percent50.classList.remove("active");
  }
}

//=============================================

//Removes "active" class from tip buttons if custom tip is clicked

customTipInput.addEventListener("click", function () {
  removeActive();
})

//=============================================

//Calculates Tip Amount

const calculateTip = function () {
  if (customTip !== "") {
    tipMultiplier = customTip / 100;
    console.log(tipMultiplier);
  }
}

calculateTip();
