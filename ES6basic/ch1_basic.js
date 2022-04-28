



// 변수
let 변수렛 = 0;
const 변수콘스트 = 0;

/// 변수 var은 변수 선언 방식에서 큰 단점을 가지고 있다. 변수를 한 번 더 선언했음에도 불구하고, 각각 다른 값이 출력되는 것이 그 문제이다.
/// 이 때, let과 const는 변수를 다시 선언할 경우, 이미 선언되었다는 에러 메세지를 띄워 이러한 문제를 해결하고자 했다.
/// let과 const의 차이는 재할당(immutable)의 여부이다. > let은 재할당이 가능하지만, const는 재할당이 불가능하다. 또 let은 변수의 선언단계와 초기화단계가 분리되어 진행되지만, const는 선언과 초기화가 동시에 진행된다.
/// 정리하자면, let과 const는 1.변수의 중복 선언이 불가하고, 2. 블록 레벨의 스코프 {} 에서 작동한다.







//// 함수 선언식
선언식();   //// 호이스팅이 됨
function 선언식() {
    let 함수선언식입니다;
}

//// 함수 표현식
let 함수표현식 = function 표현식() {
    let 함수표현식입니다;
}
함수표현식();   //// 호이스팅이 되지 않음




// 화살표 함수
let 화살표 = () => {
    let 화살표함수입니다;
}
화살표();   //// 호이스팅이 되지 않음

// 파라미터와 아규먼트를 이용한 화살표 함수
let 화살표인자 = (파라미터) => {
    console.log(파라미터);
}
화살표인자('아규먼트');









// && 연산자
let car = 'car';
car && console.log(car);
//// 값이 있으면 true 출력, null이거나 undefined일 경우 
// 삼항연산자
let age = 20;
let person = age > 18 ? 'adult' : 'kids';
//// 조건에 맞으면 왼쪽, 맞지 않으면 오른쪽 값을 반환








// 인덱스를 통한 자료 접근
let cars = ['car1', 'car2', 'car3'];
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];

// 구조화를 통한 자료 접근
let [car10, car20, car30] = cars
console.log(car10);
console.log(car20);
console.log(car30);


// 구조화를 통한 계산기 만들기
let 계산기 = (a, b) => {
    let 더하기 = a + b;
    let 빼기 = a - b;
    let 곱하기 = a * b;
    let 나누기 = a / b;
    return [더하기, 빼기, 곱하기, 나누기]
}

let [더하기, 빼기, 곱하기, 나누기] = 계산기(8, 4);
console.log(더하기);
console.log(빼기);
console.log(곱하기);
console.log(나누기);




// spread operator

// tarnary

// promise


// 데이터 저장 및 전송 : cookie, localStorage, json
// 로그인, 장바구니


