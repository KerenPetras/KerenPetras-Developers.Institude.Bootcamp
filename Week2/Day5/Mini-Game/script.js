const confirm = true;
function playTheGame() {
    if (confirm) { //confirm is always true
        const userConfirm = window.confirm("Wanna play a game?");
        if (userConfirm) {
            let userTurns = 0; //declartion so that we know how many turns we want the user to have
            let computerRandomNum = Math.floor(Math.random() * 10);
            console.log(computerRandomNum);
            do {
                const userRandomNum = +prompt("You are a brave one! \nPick a random number between 0-10.\nIf you guessed the same number that I chose you win!\nBut if you guessed wrong you lose,so choose wisely: ");
                if (isNaN(userRandomNum) || userRandomNum < 0 || userRandomNum > 10) {
                    if (isNaN(userRandomNum)) {
                      alert("Sorry, Not a number. Try again.");
                    } else {
                      alert("Sorry, it's not a good number. Try again.");
                    }
                } else {
                    if (userRandomNum === computerRandomNum) {
                        alert("You got my random number correct!");
                        alert("We have a winner!");
                        break; //exit game if guessed correctly
                    } else if (userRandomNum > computerRandomNum) {
                        alert("Your choice is bigger than the actual number, try again..");
                    } else if (userRandomNum < computerRandomNum) {
                        alert("Your choice is smaller than the actual number, try again..");
                    }
                }
                userTurns++;
            } while (userTurns < 3);
            if (userTurns === 3) {
                alert("You are out of trys, better luck next time!");
            }
        } else {
            alert("Scared I might win? HA fine..Goodbye! ");
        }
    }
}


