let firstCard = 10;

let secondCard = 12 ;

let sum = firstCard+secondCard;

let hasBlackJack =false;
let isAlive = true;
let message =""
let messageEl = document.getElementById("message-el")

function startGame(){
    if(sum <= 20){

        message = "Do you want to draw a new Card? 🙂";
        }
        else if (sum === 21){
            message ="Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true
        }
        else{
            message ="Youre out of the game! 😢";
            isAlive =false;
        }
messageEl.textContent=message
}

