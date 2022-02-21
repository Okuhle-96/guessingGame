var guess = document.querySelector(".guess");
var guessBtn = document.querySelector(".guessBtn");
var message = document.querySelector(".message");

var number = Math.ceil((Math.random() * 100));

function guessRandomNumber(){
    if(guess.value < number){
        message.innerHTML = "Your guess is too low.";
    }else if(guess.value > number) {
        message.innerHTML = "Your guess is too high.";
    }else {
        message.innerHTML = `Correct, the secret number is ${number}`;
    }
    
   setTimeout(function() {
  message.innerHTML = "";
}, 1500);


}guessBtn.addEventListener("click", guessRandomNumber)
