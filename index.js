var randomNumber1 = Math.floor(Math.random()*6 +1);

console.log(randomNumber1);

randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage1);


var randomNumber2 = Math.floor(Math.random()*6 +1);

console.log(randomNumber2);

randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randomDiceImage2);



function winner(){

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    }else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    }else{
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

winner();