// Selects Bill Input Section

const billAmountInput = document.querySelector(".bill-input-div input");

//Selects Percentage Buttons

const percent5 = document.querySelector(".percent5");

const percent10 = document.querySelector(".percent10");

const percent15 = document.querySelector(".percent15");

const percent25 = document.querySelector(".percent25");

const percent50 = document.querySelector(".percent50");


//Selects Custom Tip input

const customTipInput = document.querySelector("#custom-tip");


//Selects Number of People input

const numPeopleInput = document.querySelector("#people-amount");

const peopleValidatorMessage = document.querySelector(".people-section span");

const peopleInputDiv = document.querySelector(".people-input-div");


//Selects Tip Amount Output

const tipOutput = document.querySelector(".tip-output-half span");

//Selects Total Amount Output

const totalAmountOutput = document.querySelector(".total-output-half span");

//Selects Reset Button

const resetButton = document.querySelector(".reset-button");
console.log(resetButton);

let tipMultiplier = 0;



//===========================================================

//Main Function

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calculateCustom();
    validatePeople();
    calculateTip();
    calculateBill();
  }
})

//=============================================

// Adds functionality to Reset button

resetButton.addEventListener("click", function () {
  billAmountInput.value = "";
  removeActive();
  customTipInput.value = "";
  numPeopleInput.value = "";
  tipOutput.innerText = "$0.00";
  totalAmountOutput.innerText = "$0.00";

})

//==============================================

// Click events for tip Buttons

percent5.addEventListener("click", function() {
  if (percent5.classList.contains("active")) {
    percent5.classList.remove("active");
  } else {
    removeActive();
    customTipInput.value = "";
    percent5.classList.add("active");
    tipMultiplier = .05;
  }
})

percent10.addEventListener("click", function() {
  if (percent10.classList.contains("active")) {
    percent10.classList.remove("active");
  } else {
    removeActive();
    customTipInput.value = "";
    percent10.classList.add("active");
    tipMultiplier = .1;
  }
})

percent15.addEventListener("click", function() {
  if (percent15.classList.contains("active")) {
    percent15.classList.remove("active");
  } else {
    removeActive();
    customTipInput.value = "";
    percent15.classList.add("active");
    tipMultiplier = .15;
  }
})

percent25.addEventListener("click", function() {
  if (percent25.classList.contains("active")) {
    percent25.classList.remove("active");
  } else {
    removeActive();
    customTipInput.value = "";
    percent25.classList.add("active");
    tipMultiplier = .25;
  }
})

percent50.addEventListener("click", function() {
  if (percent50.classList.contains("active")) {
    percent50.classList.remove("active");
  } else {
    removeActive();
    customTipInput.value = "";
    percent50.classList.add("active");
    tipMultiplier = .5;
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

//Validates amount of people

const validatePeople = function () {
  if (numPeopleInput.value < 1) {
    peopleValidatorMessage.classList.remove("hide");
    peopleInputDiv.classList.add("validation");
  } else {
    peopleValidatorMessage.classList.add("hide");
    peopleInputDiv.classList.remove("validation");
  }
}

//=============================================

// Calculates custom tip Amount

const calculateCustom = function () {
  if (customTipInput.value !== "") {
    tipMultiplier = customTipInput.value / 100;
  } else {
    return tipMultiplier;
  }
}


//=============================================

//Calculates and populates total bill per person

const calculateBill = function () {
  if (peopleValidatorMessage.classList.contains("hide")) {
    const billTotal = billAmountInput.value / numPeopleInput.value;
    const officialBillTotal = billTotal.toFixed(2);
    totalAmountOutput.innerText = "$" + officialBillTotal;
  }
}

//============================================

//Calculates and populates tip per person

const calculateTip = function () {
  if (peopleValidatorMessage.classList.contains("hide")) {
    const tipTotal = billAmountInput.value * tipMultiplier;
    const tipPerPerson = tipTotal / numPeopleInput.value;
    const officialTip = tipPerPerson.toFixed(2);
    tipOutput.innerText = "$" + officialTip;
  }
}

//============================================
