'use strict'

let rand_num1 = 0
let rand_num2 = 0
let correctCount = 0;
let incorrectCount = 0;

const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10)
    rand_num2 = getRandomIntNumberRange (1, 10)
    document.querySelector("#num1").innerHTML = rand_num1
    document.querySelector("#num2").innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert ('Correct')
        correctCount++;
        document.querySelector('#correct-count').innerHTML = correctCount;
    }
    else {
        alert('Incorrect')
        incorrectCount++;
        document.querySelector('#incorrect-count').innerHTML = incorrectCount;
    }
    randomizeNumbers()
    document.querySelector('Input').value =' '
})