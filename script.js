"use strict";


const btn = document.querySelector("button");

btn.addEventListener("mouseenter", function(event) {
    event.target.style = `
    background: green;
    cursor: pointer;`
});

btn.addEventListener("mouseleave", function(event) {
    event.target.style.background = "limegreen";
    
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});













