const text_h1 = document.querySelector("h1");
const background = document.querySelector("body");


text_h1.innerText = "Hello!";
text_h1.classList = "whiteColor";
function handleColor() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth >= 600 && screenWidth < 1000) {
    background.classList.remove("blueColor");
    background.classList.remove("yellowColor");
    background.classList.add("purpleColor");
  } else if (screenWidth >= 1000) {
    background.classList.remove("blueColor");
    background.classList.remove("purpleColor");
    background.classList.add("yellowColor");
  } else {
    background.classList.remove("yellowColor");
    background.classList.remove("purpleColor");
    background.classList.add("blueColor");
  }
  
}
handleColor();
window.addEventListener("resize",handleColor);
