
let Human_Score = 0;
let Computer_Score = 0;
const choices = ['SCISSOR', 'PAPER', 'ROCK']

//function to display random choice from computer.
// Math.floor returns a whole number.
// Math.random() will return a float between 0 and 1.
// ComputerChoice();


//function to display users choices.
function humanChoice() {
    let Hchoices = (prompt("enter the choices").toUpperCase())
    return (Hchoices);
}


function ComputerChoice() {
    let finalchoices = (Math.floor(Math.random() * choices.length));
    // console.log(`computer choice is ${choices[finalchoices]}`)
    return choices[finalchoices];
}

function checkWinner(humanSelection, ComputerSelection) {

    if (
        (humanSelection === "SCISSOR" && ComputerSelection === "PAPER") ||
        (humanSelection === "PAPER" && ComputerSelection === "ROCK") ||
        (humanSelection === "ROCK" && ComputerSelection === "SCISSOR")) {
        return "Human";
    }
    else if (
        (humanSelection === "PAPER" && ComputerSelection === "SCISSOR") ||
        (humanSelection === "ROCK" && ComputerSelection === "PAPER") ||
        (humanSelection === "SCISSOR" && ComputerSelection === "ROCK")) {
        return "Computer";
    }
    else {
        return "Tie";
    }
}



function playRound(humanSelection, ComputerSelection) {
    const result = checkWinner(humanSelection, ComputerSelection);
    if (result == "Tie") {
        return `It's a Tie`;
    }
    else if (result == "Human") {
        return `You wins! ${humanSelection} beats ${ComputerSelection}`
    }
    else {
        return `You loose! ${ComputerSelection} beats ${humanSelection}`
    }


}

function game() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = humanChoice();
        const ComputerSelection = ComputerChoice();
        console.log(playRound(humanSelection, ComputerSelection));
        console.log("---------")



        if (checkWinner(humanSelection, ComputerSelection) == "Computer") {
            Computer_Score++
        }
        else if (checkWinner(humanSelection, ComputerSelection) == "Human") {
            Human_Score++
        }
    }
    console.log(`Game Over!!`)
    if (Computer_Score > Human_Score) {
        console.log(`Computer is the Winner.`)
    }
    else if (Human_Score > Computer_Score) {
        console.log(`Human Wins`)
    }
    else {
        `We have a Tie!`
    }
}
game();