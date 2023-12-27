let startButton = document.getElementById("startButton");
let gameScreen = document.getElementById("gameScreen");
let gameInput = document.getElementById("gameInput");
let sendForm = document.getElementById("sendForm");
let winMessageDiv = document.getElementById("winMessageDiv");
let gameMessageDiv = document.getElementById("gameMessageDiv");
let retryGame = document.getElementById("retryGame");
let retryGameButton = document.getElementById("retryGameButton")

let userInput = "";
let numberofTries = 0;
let remainingTries = true;

let winMessage = document.createElement("p");
let triesMessage = document.createElement("p");
let gameOverMessage = document.createElement("p");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
retryGameButton.addEventListener("click", function(){
    location.reload();
})


startButton.addEventListener("click", function(){

    if (gameScreen.style.display === "none"){
        
        gameScreen.style.display = "block";

    } else{
        randomNumber = getRandomInt(1,10)
        console.log(randomNumber)
        showUserTries(numberofTries) 
        gameScreen.style.display = "flex";
        startButton.style.display = "none";
    }

})


sendForm.addEventListener("click", guessingGame)

function showUserTries(numberofTries){
    triesMessage.textContent = ("Você tem "+(5 - numberofTries)+" tentativas restantes");
    gameMessageDiv.appendChild(triesMessage);
}

function showWinMessage(){
    winMessage.textContent = "Parabéns, você acertou o número!";
    winMessageDiv.appendChild(winMessage);
    gameMessageDiv.style.display = "none";
    triesMessage.style.display = "none";
    sendForm.style.display = "none";
    gameInput.style.display = "none";
    retryGame.style.display = "block";
}

function gameOver(){
    gameOverMessage.textContent = "Suas tentativas acabaram!, infelizmente você perdeu :(";
    gameMessageDiv.appendChild(gameOverMessage);
    triesMessage.style.display = "none";
    sendForm.style.display = "none";
    gameInput.style.display = "none";
    retryGame.style.display = "block";

}

function guessingGame(){

    if (numberofTries < 4){
        userInput = gameInput.value;

        if (userInput == randomNumber){
            console.log("você acertou!", userInput, randomNumber)
            showWinMessage()
        }

        numberofTries++

        showUserTries(numberofTries)

    } else if (numberofTries >= 4) {
        
        remainingTries = false
        showUserTries(5)
        gameOver()

    }

}

