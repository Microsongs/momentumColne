const form = document.querySelector(".js-form"),
    input = form.querySelector("input");    //input form을 가져옴
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//로컬 스토리지 = 브라우저에 데이터를 저장

function saveName(text){
    localStorage.setItem(USER_LS,text); //로컬스토리지에 저장해준다.
}

function handleSubmit(event){
    event.preventDefault(); //입력 후 새로고침 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue); //이름을 저장
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)    //제출 시 handleSubmit함수 호출
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
        askForName();
    }
    else{
        //she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();