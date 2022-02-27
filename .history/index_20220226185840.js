let firstCard = 2;

let secondCard = 11 ;

let cards =[firstCard, secondCard] //array ordered list of items

let sum = firstCard+secondCard;

let hasBlackJack =false;
let isAlive = true;
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let array =["Hi", "hello","what's up"];
console.log(array)
function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: " +cards[0] +" "+cards[1]
    sumEl.textContent="Sum: " +sum

    if(sum <= 20){

        message = "Do you want to draw a new Card?";
        }
        else if (sum === 21){
            message ="Wohoo! You've got Blackjack!";
        hasBlackJack = true
        }
        else{
            message ="Youre out of the game!";
            isAlive =false;
        }
messageEl.textContent=message
}

function newCard(){
console.log("Drawing a new card from the deck")
let card =2;
sum+=card;
renderGame();

}