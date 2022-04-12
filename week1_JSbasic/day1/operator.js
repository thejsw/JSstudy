// Operator (연산자)

// 산술 연산자
// // 사용 용도 : 계산을 위해 사용한다.
console.log( 3+3 ); // 덧셈
console.log( 3-3 ); // 뺄셈
console.log( 3*3 ); // 곱셈
console.log( 3/3 ); // 나눗셈
console.log( 3%3 ); // 나머지
console.log( 3**3 ); // 거듭제곱

console.log((1+1) * 2); // 우선순위 적용

console.log( 'a' + 'b' + 'c' + 'd' + 'e' + 'f' + 'u' ) // 문자열에도 적용가능 

// 증감 연산자
// // 사용 용도 : 값을 하나씩 증가 또는 감소하고 싶을 때, 산술연산자를 쓰는 것보다 간결하게 수행할 수 있다.
var num = 0;

num++; // 하나씩 증가
console.log(num);

num--; // 하나씩 감소
console.log(num);

// 대입 연산자
// // 오른쪽 값을 왼쪽에 대입한다.
var num = 10; 
console.log(num);

// 복합 대입 연산자
// // 사용 용도 : 대입 연산을 실행할 때 코드를 간결하게 해준다.
console.log( num += 1 );   // num = 10 + 1 > 10에 1을 더한 값
console.log( num -= 1 );   // num = 10 - 1 > 10에 1을 뺀 값
console.log( num *= 2 );   // num = 10 * 2 > 10에 2를 곱한 값
console.log( num /= 2 );   // num = 10 / 2 > 10을 2로 나눈 값
console.log( num %= 2 );   // num = 10 % 2 > 10을 2로 나눈 나머지


// 비교 연산자

// 논리 연산자