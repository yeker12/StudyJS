// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const text = document.querySelector("h2");
const superEventHandler = {

  event0: function handleMouseEnter () {
    text.innerText = "The mouse is here!";
    text.style.color = colors[0];
  }, 
  event1: function handleMouseLeave(){
    text.innerText = "The mouse is gone!";
    text.style.color = colors[1];
  },
  event2: function handleWindowResize(){
    text.innerText = "You just resized!";
    text.style.color = colors[2];
  },
  event3: function handleMouseRightClick(){
    text.innerText = "That was a right click!";
    text.style.color = colors[3];
  } 
};

text.addEventListener("mouseenter", superEventHandler.event0);
text.addEventListener("mouseleave", superEventHandler.event1);
window.addEventListener("resize", superEventHandler.event2);
text.addEventListener("contextmenu", superEventHandler.event3);
