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

