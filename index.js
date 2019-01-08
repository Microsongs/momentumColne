//Variable(변수) = 변할 수 있는 것
//라인 = expression 한 expression에 여러 개를 적는 방법은 ;를 적어서 구분해준다.
//하지만 한 줄에 여러 가지 변수 선언은 좋지 않음

//변수의 Create -> 변수의 Initialize -> 변수의 Use

//let은 변수의 선언
//const는 변수의 선언, const는 값이 초기화 이후 변하지 않음
//var은 variable, let과의 차이점은..
const a = 221;
let b = a - 5;
//a = 4;  //변수의 업데이트, const이므로 오류 발생
console.log(b, a);