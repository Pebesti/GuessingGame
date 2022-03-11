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
//alert(randomNumber)
function guessing_game(num = randy(), input = Number(number.value)) {
        if (input > 0 && input < 100) {

            if (input < num) {
                msg.innerHTML = "Your guess is too low";
            }
            else if (input > num) {
                msg.innerHTML = "Your guess is too high";
            }
            else {
                msg.innerHTML = `Correct, the secret number is ${input}`;
                setTimeout(function () {
                    num = randy();
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


