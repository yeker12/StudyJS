const logINForm = document.querySelector("#logIn-Form");
const logInput = document.querySelector("#logIn-Form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    logINForm.classList.add(HIDDEN_CLASSNAME);
    const username = logInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername= localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    logINForm.classList.remove(HIDDEN_CLASSNAME);
    logINForm.addEventListener("submit", onLoginSubmit);
}
else{
    // show the greeting
    paintGreeting(savedUsername);
}