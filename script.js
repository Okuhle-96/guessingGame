var guess = document.querySelector(".guess");
var guessBtn = document.querySelector(".guessBtn");
var message = document.querySelector(".message");

var number = Math.ceil((Math.random() * 100));

function guessRandomNumber(){
    if(guess.value < number){
        message.innerHTML = "Your guess is too low.";
        setTimeout(function(){
            message.innerHTML = "";
         }, 2000);
    }else if(guess.value > number) {
        message.innerHTML = "Your guess is too high.";
        setTimeout(function(){
            message.innerHTML = "";
         }, 2000);
    }else {
        message.innerHTML = `Correct, the secret number is ${number} ! ! !`;
        setTimeout(function(){
            message.innerHTML = "";
         }, 5000);
    }

    return number;
    
}guessBtn.addEventListener("click", guessRandomNumber)

function newGame(){
    if(mesagge = "Correct, the secret number is ${number} ! ! !`"){
        setTimeout(function(){
          message.innerHTML = "Begin New Game";
       }, 3000);
        
    }
}
