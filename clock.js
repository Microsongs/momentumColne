const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

    //현재 시간을 얻는 방법
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}


function init(){
    //setInterval함수 : 함수,실행간격으로 실행간격마다 실행되게 해준다.
    getTime();
    setInterval(getTime, 1000);
}

init();