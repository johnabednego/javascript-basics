//Challeneg Activity one//
function ageInDays(){
    let birthday = prompt("What is your year of birth.....Good friend?");
    let results = (2021-birthday)*365;
    if (!birthday){
        return 0;};
    let h1 = document.createElement("h1");
    let text = document.createTextNode("You are "+ results + " days old!");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(text);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset(){
    document.getElementById("ageInDays").remove();
}
//Challenge Activity 2
function generate(){
    let image = document.createElement("img");
    let div = document.getElementById("cat-shown");
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
//Challenge Activity 3
function rpsGame(yourchoice){
    let humanChoice, botChoice;
    humanChoice = yourchoice.id;
    console.log("Human Chpoice: " + humanChoice)
    
    botChoice = numberToChoice(ranToRpsInt());
    console.log("Computer Choice: " + botChoice);
    
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourchoice.id, botChoice, message);
}

function ranToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourchoice, computerChoice)
{   let rpsDatabase={
    "rock":{"scissors":1, "rock":0.5, "paper":0},
    "paper":{"rock":1, "paper":0.5, "scissors":0},
    "scissors":{"paper":1, "scissors":0.5, "rock":0}
}
let yourScore = rpsDatabase[yourchoice][computerChoice];
let computerScore = rpsDatabase[computerChoice][yourchoice];
return [yourScore, computerScore];

} 

function finalMessage([yourScore, computerScore]){
    if(yourScore===0){
        return {"message": "You lost!", 'color': 'red'};
    }
    else if(yourScore===0.5){
        return {"message": "You tied!", 'color': 'yellow'};
    }
    else {
        return {"message": "You win!", 'color': 'green'};
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imagesDatabase = {
    "rock": document.getElementById("rock").src,
    "paper": document.getElementById("paper").src,
    "scissors": document.getElementById("scissors").src
    }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let humanDiv =document.createElement("div");
    let botDiv =document.createElement("div");
    let messageDiv =document.createElement("div");

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice] + "' height = 150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage["message"] + "</h1";
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice] + "' height = 150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
    if (onclick=humanImageChoice){
        return rpsGame();
    }
    
}
function reset(){
    window.location="file:///C:/Users/User/Desktop/Java/index.html";
}

//Challenge Activity 4
let all_buttons = document.getElementsByTagName("button");
let copyAllButtons = [];
for (let i =0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === "red"){
        buttonRed();
    }
    else if (buttonThingy.value === "green"){
        buttonGreen();
    }
    else if (buttonThingy.value === "reset"){
        buttonColorReset();
    }
    else if (buttonThingy.value === "random"){
        randomColors();
    }
}
function buttonRed(){
    for(let i =0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
    };
}

function buttonGreen(){
    for(let i =0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
    };
}

function buttonColorReset(){
    for(let i =0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    };
}

function run(){
 Math.floor(Math.random()*7);
}
function inn(number){
    copyAllButtons[number];
}
function randomColors(){
   let choices = ["btn-primary","btn-danger", "btn-success", "btn-warning"]
   for(let i =0; i < all_buttons.length; i++){
   let randomNum = Math.floor(Math.random()*4);
   all_buttons[i].classList.remove(all_buttons[i].classList[1]);
   all_buttons[i].classList.add(choices[randomNum]);

};
    
}

//Challenge 5://
let blackjarGame = {
    "you":{"ScoreSpan":"#your-blackjack-result", "div":"#your-box", "score":0},
    "dealer":{"ScoreSpan":"#dealer-blackjack-result", "div":"#dealer-box", "score":0},
    "cards": ["1","2","3","4"]
};

const YOU = blackjarGame["you"];
const DEALER = blackjarGame["dealer"];

const hitSound = new Audio("sounds/swish.m4a");

document.querySelector("#blackjack-hit-button").addEventListener("click", blackjarHit);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackjarDeal);

function  blackjarHit(){
    showCard(DEALER);
};

function showCard(activePlayer){
let cardImage = document.createElement("img");
cardImage.src="images/Q.png";
document.querySelector(activePlayer["div"]).appendChild(cardImage);
hitSound.play();
}

function blackjarDeal(){
    let yourImages = document.querySelector("#your-box").querySelectorAll("img");
    let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");
    for (let i=0; i<yourImages.length; i++){
        yourImages[i].remove();
    }

    for (let i=0; i<dealerImages.length; i++){
        dealerImages[i].remove();
    }
}
