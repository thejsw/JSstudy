// this is main.js

// 출력
// // 사용 용도 : 스크립트의 데이터 값을 확인하고 싶을 때, 콘솔 패널에 값을 표시하고 싶을 때
console.log('Hello World'); //console.log



// Data type (자료형)
// var variable (변수)

// String (문자)
var name = 'name';   // '' "" 둘 다 사용해도 괜찮음
var space = '';    // 빈문자로 사용
console.log( name );
console.log( space );

// Number (숫자)
var num = 0;
console.log(num);

// Boolean (참, 거짓)
var bool = true;
var bool = false;
console.log( bool );

// undefined (변수의 자료형이 정의되지 않은 상태)
var un;
console.log( un );

// null (값이 없음)
var nu = null;
console.log( nu );

// typeof (자료형 확인)
var num = 7;
console.log(typeof num);

var str = '7'
console.log((num+str), typeof (num+str)); // 숫자와 문자를 더하면 문자가 된다.



// Operator (연산자)

// 산술 연산자
console.log( 3+3 ); // 덧셈
console.log( 3-3 ); // 뺄셈
console.log( 3*3 ); // 곱셈
console.log( 3/3 ); // 나눗셈
console.log( 3%3 ); // 나머지
console.log( 3**3 ); // 거듭제곱

console.log((1+1) * 2); // 우선순위 적용

console.log( 'a' + 'b' + 'c' + 'd' + 'e' + 'f' + 'u' ) // 문자열에도 적용가능 

// 증감 연산자
var num = 0;

num++; // 하나씩 증가
console.log(num);

num--; // 하나씩 감소
console.log(num);

// 대입 연산자
var num = 10; // 오른쪽 값을 왼쪽에 대입한다.
console.log(num);

console.log( num += 1 );
console.log( num -= 1 );
console.log( num *= 2 );
console.log( num /= 2 );
console.log( num %= 2 );


// 비교 연산자
// 할당 연산자
// 논리 연산자