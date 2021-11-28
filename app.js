const title = document.querySelector("div.testclass:first-child h1");

function handleTilteClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!!";
}

title.addEventListener("click", handleTilteClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


 