

let cards =[] //array ordered list of items

let sum = 0;

let hasBlackJack =false;
let isAlive = false;
let message =""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")
console.log(cards)
function getRandomCard(){
let randCard = Math.floor(Math.random()*13)+1;
if (randCard ===  1){
    return 11
}else if (randCard>10 ){
    return 10
}
else{
return randCard;

}}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard();

let secondCard = getRandomCard() ;
cards =[firstCard, secondCard]
    renderGame()
}
function renderGame(){
 
    cardsEl.textContent= "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent+= cards[i] +" "

    }
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
let card =getRandomCard() ;
sum+=card;
cards.push(card)
console.log(cards)
renderGame();

}