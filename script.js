"use strict";

const title = document.querySelector("#title");
title.innerHTML = "DOM";

const text = document.querySelector(".text");
text.addEventListener("keyup", function(event) {
    title.innerHTML = event.target.value;
});

text.addEventListener("mouseenter", function() {
    text.style.border = "2px solid green";
});

text.addEventListener("mouseleave", function() {
    text.style.border = "2px solid #3cb371";
});



const circle = document.querySelector("div");

circle.addEventListener("mouseenter", function() {
    circle.style.background = "#fce837";
});

circle.addEventListener("mouseleave", function() {
    circle.style.background = "#3cb371";
});













