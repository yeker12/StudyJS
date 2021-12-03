const h1 = document.querySelector("div.testclass:first-child h1");

function handleTilteClick(){
    const clickedClass = "clicked"
   if(h1.className === "clicked"){
       h1.className = "";
   }
   else{
       h1.className = "clicked";
   }
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copy!!");
}

function handleWindowOffline(){
    alert("SOS on WIFI!!");
}

function handleWindowOnline(){
    alert("All Good!!!");
}



h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("click", handleTilteClick);
h1.addEventListener("mouseleave", handleMouseLeave);
 
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
