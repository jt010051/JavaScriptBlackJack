let firstCard = 10;

let secondCard = 11;

let sum = firstCard+secondCard;

let hasBlackJack =false;
let isAlive = true;
let message =null
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
console.log(message);
