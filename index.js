//Generating a random value between 1 - 100
function randy() {
    return Math.ceil((Math.random() * 100));
}
//get a reference to the textbox where the user will input their guess
let number = document.querySelector(".number_guess");

//get a reference to the guess button 
let guess_btn = document.querySelector(".guess_btn");

//get a reference to the message portion
let msg = document.querySelector(".message");

let randomNumber = randy();
alert(randomNumber)
function guessing_game() {
        if (number.value > 0 && number.value < 100) {

            if (number.value < randomNumber) {
                msg.innerHTML = "Your guess is too low";
            }
            else if (number.value > randomNumber) {
                msg.innerHTML = "Your guess is too high";
            }
            else {
                msg.innerHTML = `Correct, the secret number is ${number.value}`;
                setTimeout(function () {
                    randomNumber = randy();
                    msg.innerHTML = 'New game has started!';
                    number.value = "";
                }, 5000)
            }
        }
        else {
            msg.innerHTML = 'The number you have entered is out of range. Please enter a number between 1 and 100';
        }

        setTimeout(function () {
            msg.innerHTML = "";
        }, 3000);
console.log(randomNumber)
    }

guess_btn.addEventListener("click", guessing_game)
