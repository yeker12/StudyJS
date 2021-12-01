const logINForm = document.querySelector("#logIn-Form");
const logInput = document.querySelector("#logIn-Form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const username = logInput.value;
    localStorage.setItem("username",username);
    logINForm.classList.add("HIDDEN_CLASSNAME");
    console.log(username);
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove("HIDDEN_CLASSNAME");

}

logINForm.addEventListener("submit", onLoginSubmit);
