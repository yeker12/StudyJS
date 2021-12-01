const logINForm = document.querySelector("#logIn-Form");
const logInput = document.querySelector("#logIn-Form input");
const link = document.querySelector("a");


function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);

}

logINForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);