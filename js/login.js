const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HiddenClassName = "hidden";
const UserNameKey = "username";

//로그인 폼 함수
function onLoginSumit(login) {
  login.preventDefault(); //브라우저 기본 동작 막기
  loginForm.classList.add(HiddenClassName); //로그인폼 없애기
  const userName = loginInput.value;
  localStorage.setItem(UserNameKey, userName); //로컬저장소에 유저 저장
  paintGreetings(userName);
}

//인사구문 출력 함수
function paintGreetings(username) {
  greeting.innerText = `안녕하세요. ${username}님`;
  greeting.classList.remove(HiddenClassName);
}

const savedUserName = localStorage.getItem(UserNameKey);

if (savedUserName == null) {
  //show the form
  loginForm.classList.remove(HiddenClassName);
  loginForm.addEventListener("submit", onLoginSumit);
} else {
  //show greeting
  paintGreetings(savedUserName);
}
