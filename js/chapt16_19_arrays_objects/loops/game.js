let maximum = parseInt(prompt("Enter the maximum number!"));
let attempts = 1

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)

let guess = parseInt(prompt("Enter yout first guess!"));
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;

    if (guess > targetNum) {
        guess = prompt("Too high, enter your guess again!");
    }
    else {
        guess = prompt("Too slow, enter your guess again!");
    }
}
if (guess === 'q') {
    console.log(`OK, you quit, you had ${attempts} guesses`)
}
else {
    console.log(`Nice, it took you ${attempts} guesses`)
}