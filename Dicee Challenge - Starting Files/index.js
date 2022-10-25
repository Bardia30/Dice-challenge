
let randomNumber1 = Math.floor((Math.random()*6)+1);
// console.log(randomNumber1);
let randomImageSource1= "images/dice"+randomNumber1+".png"


let randomNumber2 = Math.floor((Math.random()*6)+1);

let randomImageSource2 = "images/dice"+randomNumber2+".png"
    
var img1 = document.querySelectorAll("img")[0];

var img2 = document.querySelectorAll("img")[1];


img1.setAttribute("src",randomImageSource1);

img2.setAttribute("src",randomImageSource2);

// let imgFirst = document.getElementsByClassName("img2");

// imgFirst.setAttribute(src,"images/dice"+randomNumber1+".png");
// let imgSecond = document.getElementsByClassName("img2");

// imgSecond.setAttribute(src,"images/dice"+randomNumber2+".png");

let winner = ""
if (randomNumber1 > randomNumber2) {
    winner = "Player 1 Wins!"
    
} else if (randomNumber1 < randomNumber2) {
    winner = "Player 2 Wins!"
} else {
    winner = "Draw"
}

let header = document.querySelector("h1");

header.innerHTML = winner;