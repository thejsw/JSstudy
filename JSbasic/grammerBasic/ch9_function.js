var str = 'string';
var proto = str.toUpperCase();
console.log(proto);
console.log(proto.__proto__); // 변수의 프로토타입 객체에 접근



// 함수 선언식
function 함수1() {
    console.log('Hello');
}
함수1();


// 함수 표현식
var 함수2 = function() { // 익명 함수
    console.log('Hello');
} //콜백에서 사용
함수2();


// 호이스팅 > 함수를 실행하기 전에 함수에 필요한 값을 모두 모아서 최상단에 선언한다.
// 함수 표현식에서는 불가능
함수3();

function 함수3() {
    console.log('Hello');
}


// return > 함수를 중지시킴
function 함수4() {
    return 'Hello';
    console.log('goodbye');
}
console.log(함수4());
// return > 값을 반환함
function 함수5(a, b) {
    return a + b;
}
var result = 함수5(1, 2);
console.log(result);


// return 기능을 활용한 예제
// function isAdult(age) {
//     if (age >= 19) {
//         return '성인 입니다.';
//     }
//     else {
//         return '미성년자 입니다.'
//     }
// }

// var age = prompt('입력받기', '나이를 입력해주세요');
// alert(isAdult(age));

// var input = confirm('확인하시겠습니까?');
// alert(input);

// var fruits = ['apple', 'banana', 'orange', 'mango'];

// function findFruits() {
//     var result = [];
//     for (var i in fruits) {
//         result.push(fruits[i].toUpperCase());
//     }
//     return result;
// }
// console.log(findFruits());



// 콜백 callback
// 다른 함수의 인자가 되는 함수
function myCallback(data) {
    console.log(data);
}
myFunction(myCallback); // 인자가 없을 때

function myFunction(arg) {
    console.log('hello');
    arg('world');
}

myFunction(function (data) {  // 인자가 있을 때
    myCallback(data)
});

function 함수10(cb) {
    console.log('hello');
    cb();
}

function 콜백1(data) {
    console.log(data);
}

함수10(function () { // 인자가 잇을 때2
    콜백1(2)
})