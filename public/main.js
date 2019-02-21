let number = ["1", "2", "3", "4", "5", "6"];

function randomDice() {
    let numbers = number[Math.floor(Math.random() * number.length)];
    document.querySelector("#roll").textContent = numbers;
}


document.addEventListener('DOMContentLoaded', main)
