// Dice 1
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let image1 = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png
let imageSource1 = "images/" + image1;  // images/dice1.png - images/dice6.png
let randomDiceImagePlayer1 = document.getElementsByClassName("img1")[0];
randomDiceImagePlayer1.setAttribute("src", imageSource1);

// Dice 2
let randomNumber2 = Math.floor(Math.random()*6) + 1;
let image2 = "dice" + randomNumber2 + ".png";  // // dice1.png - dice6.png
let imageSource2 = "images/" + image2;  // images/dice1.png - images/dice6.png
let randomDiceImagePlayer2 = document.getElementsByClassName("img2")[0];
randomDiceImagePlayer2.setAttribute("src", imageSource2);

// for player Wining or Draw heading
let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    heading.innerHTML = "🚩 Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Wins! 🚩"
}
else{
    heading.innerHTML = "Draw!"
}
