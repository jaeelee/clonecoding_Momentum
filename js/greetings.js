
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 (submit의 기본행동인 새로고침을 막아줌)
    const username = loginInput.value;
    // local storage : 브라우저에 뭔가를 저장할 수 있게 해줌
    // 개발자 도구 > 애플리캐이션 > 로컬스토리지를 통해 확인 가능
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);   
}
else
{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}!`;
}