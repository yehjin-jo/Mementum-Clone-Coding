const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log("username");
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username} keep going`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.id = "greeting";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
 loginForm.classList.remove(HIDDEN_CLASSNAME);
 loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreeting(savedUsername);
}