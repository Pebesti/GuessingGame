//Generating a random value between 1 - 100
let randomNumber = Math.ceil((Math.random() * 100))

//get a reference to the textbox where the user will input their guess
let number = document.querySelector(".number_guess");

//get a reference to the guess button 
let guess_btn = document.querySelector(".guess_btn");

//get a reference to the message portion
let msg = document.querySelector(".message");
//alert(randomNumber)
guess_btn.addEventListener("click",function(){
    if(number.value < randomNumber){
        msg.innerHTML = "Your guess is too low";
    }
    else if(number.value > randomNumber){
        msg.innerHTML = "Your guess is too high";
    }
    else {
		msg.innerHTML =  `Correct, the secret number is ${number.value}`;
	}

    setTimeout(function(){
		msg.innerHTML = "";
	}, 3000);
})
