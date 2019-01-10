//Variable(변수) = 변할 수 있는 것
//라인 = expression 한 expression에 여러 개를 적는 방법은 ;를 적어서 구분해준다.
//하지만 한 줄에 여러 가지 변수 선언은 좋지 않음

//변수의 Create -> 변수의 Initialize -> 변수의 Use

//let은 변수의 선언
//const는 변수의 선언, const는 값이 초기화 이후 변하지 않음
//var은 variable, let과의 차이점은..
/*
const a = 221;
let b = a - 5;
//a = 4;  //변수의 업데이트, const이므로 오류 발생
console.log(b, a);
*/

/*
//변수 값 변경이 필요하기 전까지는 const를 사용하자.
//변수의 종류

//string = "문자열"
const what = "nicolas";

//Boolean = true/false
const wat = true;

//Number = 숫자;
const wa = 666;

//float = 소수;
const w = 55.1;

//변수를 정리하는 방법
//array는 list처럼 정리를 하는 것이다.
//변수의 작명규칙 -> 첫 단어는 소문자+그 이후부터 단어 맨 앞글자는 대문자
const mon = "Mon;"
const tue = "Tue;"
const wed = "Wed;"
const thu = "Thu;"
const fri = "Fri;"
//다음 변수들을 한번에 묶는 방법 = array
//array의 요소를 찾는 방법 = 배열이름[index] 단, index는 0부터 시작
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun", true]

console.log(daysOfWeek);

//변수를 한번에 묶는 방법2 = Object
const nicoInfo = ["Nicolas","55","true","Seoul"]    //다음과 같이 Array는 부적잘하다.

//Object의 생성 방법
//object는 각각의 variable과 그에 상응하는 값을 가지고 있다.
//object 내에 object, array를 보유 가능
const nicolasInfo = {
    name: "Nicolase",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Alogng the gods",
    "Lotr","Oldboy"],
    favFood:[
        {
            name:"Kimchi", 
            fatty:false
        },
        {
            name : "ChessBurger",
            fatry:true
        }
    ]
}

//Object의 요소에 접근 방법
console.log(nicolasInfo.gender);
nicolasInfo.gender="FeMale";
console.log(nicolasInfo.gender);

console.log(nicolasInfo);
//object내의 array내의 object에 접근
console.log(nicolasInfo.favFood[0].name);

console.log(console);
//function : 함수, 어떤 걸 수행하려는 한 부분
//함수를 사용함으로써 반복적인 요소를 줄일 수 있음
console.log("Greetings Nicolas");
console.log("hello Jun");
console.log("hello Liyn");
console.log("hello Dal");

function sayHello(name ,age){
    console.log('hello',name,"you have",age,"years of age.");
}

//함수 호출
sayHello('dragon',15);

*/

//2-1-2
/*
function sayHello(name,age){
    //console.log("Hello" + name + "you are" + age + "years old");
    //console.log(`Hello ${name} you are ${age} years old`);  //back tick(`)을 사용한다.
    return `Hello ${name} you are ${age} years old`;
}

//sayHello("Nicolas",15);
const greetNicolas = sayHello("Nicolas",14);    //함수의 반환값을 greetNicolas에 대입

console.log(greetNicolas);

const calculator = {
    plus : (a, b) => a+b
    minus : function(a,b){
        return a-b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);
*/

//2-2
/*
console.log(document);  //HTML Document

//const title = document.getElementById('title');
const title = document.querySelector('#title');
console.log(title);

//DOM = Document Object Model
title.innerHTML = "HI! From js";
title.style.color="red"

console.dir(title);
console.dir(document);
document.title="I own you now"
*/
/*
//2-5
if('10' === 10){  //if(조건)
    console.log("hi");   //실행
}
else if('10' === '10'){
    console.log('lalala');
}
else{
    console.log("no");
}

if(20 > 5 || 'nicloas' === 'nicolas'){
    console.log('yes')
}
else{
    console.log('no')
}

const age = prompt('how old are you');

if(age >= 18 && age <= 21){
    console.log('you can drink but you should not');
}
else if(age > 21){
    console.log('go ahead');
}
else{
    console.log('too young');
}
*/
//2-4
/*
//이벤트 : 
const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
    console.log("I have been resized");
}
window.addEventListener("resize", handleResize);    //윈도우가 resize되는 이벤트 발생 시 handleResize 함수를 호출

function handleClick(){
    title.style.color="red";
}

title.addEventListener("click",handleClick);
*/
/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        console.log("true");
        title.style.color = OTHER_COLOR;
    }
    else{
        console.log("false");
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color= BASE_COLOR;
    //title.addEventListener("click",handleClick);
    title.addEventListener("mouseenter",handleClick);
}

init();

function handleOffline(){
    console.log('bye');
}

function handleOnline(){
    console.log('welcome back');
}

navigator.addEventListener("offline",handleOffline);
navigator.addEventListener("online",handleOnline);
*/
