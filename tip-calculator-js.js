const billInput = document.getElementById("bill-input");
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip25 = document.getElementById("tip25");
const tip50 = document.getElementById("tip50");
const customTip = document.getElementById("custom-input");
const peopleInput = document.getElementById("people-input");
const invalidMessage = document.getElementById("error");
const zeroMessage = document.getElementById("zero");
const tipAmount = document.getElementById("tip-amount");
const chooseTip = document.getElementById("choose-tip");
const totalAmount = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");
const inputs = document.querySelectorAll(".button-container input");

const calculateBtn = document.getElementById("calculate-btn");

//Add the .selected class to tip buttons
inputs.forEach(input => {
    input.addEventListener("click", function() {
        inputs.forEach(i => i.classList.remove("selected"));
        this.classList.add("selected")
    })
})

//Function used to convert tip % into numerical value
const cleanInput = (str) => {
    const numRegex = /\d*?\.\d+|\d+/;
    return tipNumber = str.match(numRegex);
}

//check if inputs are valid
const checkInputs = () => {
    const selected = document.querySelector(".selected");
    if (billInput.value === "") {
        invalidMessage.classList.add("invalid");
    } else {
        invalidMessage.classList.remove("invalid")
    };
    if (peopleInput.value === "") {
        zeroMessage.classList.add("invalid");
    } else {
        zeroMessage.classList.remove("invalid");
    };
    if (!selected) {
        chooseTip.classList.add("invalid");
    } else {
        chooseTip.classList.remove("invalid");
    }
}

//tip calculator
const calculateTip = () => {
    checkInputs();
    const selected = document.querySelector(".selected");
    cleanInput(selected.value);
    let tipTotal = billInput.value * (tipNumber / 100);
    let tipPerPerson = tipTotal / Math.floor(peopleInput.value);
    let billTotal = billInput.value * (1 + tipNumber / 100);
    let totalPerPerson = billTotal / Math.floor(peopleInput.value);
    tipAmount.innerHTML = `$${tipPerPerson.toFixed(2)}`;
    totalAmount.innerHTML = `$${totalPerPerson.toFixed(2)}`;
}

//reset function
const reset = () => {
    billInput.value = "";
    peopleInput.value = "";
    inputs.forEach(input => {
        input.classList.remove("selected")
    });
    tipAmount.innerHTML = `$0.00`;
    totalAmount.innerHTML = `$0.00`;

}


calculateBtn.addEventListener("click", calculateTip);

resetBtn.addEventListener("click", reset);