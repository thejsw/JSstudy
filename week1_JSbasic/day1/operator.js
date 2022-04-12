// Operator (연산자)

// 산술 연산자
// // 사용 용도 : 계산을 위해 사용한다.
console.log( 3+3 );  // 덧셈
console.log( 3-3 );  // 뺄셈
console.log( 3*3 );  // 곱셈
console.log( 3/3 );  // 나눗셈
console.log( 3%3 );  // 나머지
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
console.log(1 == 1); // 왼쪽 값과 오른쪽 값이 같다
console.log(1 != 1); // 왼쪽 값과 오른쪽 값이 다르다

console.log(1 > 2);  // 왼쪽 값이 오른쪽 값보다 크다
console.log(1 >= 2); // 왼쪽 값이 오른쪽 값보다 크거나 같다
console.log(1 < 2);  // 왼쪽 값이 오른쪽 값보다 작다
console.log(1 <= 2); // 왼쪽 값이 오른쪽 값보다 작거나 같다

console.log(1 == '1'); // 문자와 숫자를 비교할 때에도 값이 같으면 같다.
console.log(1 === 1);  // 왼쪽 값과 오른쪽 값의 값과 자료형이 같다



// 논리 연산자
// // 사용 용도 : 두 가지 이상의 식을 함께 참 거짓을 판단하는 경우 
var a = 10, b = 20;
console.log( (a < b) && (a*2 == b) );  // && 그리고 > 왼쪽 식과 오른쪽 식의 값이 모두 true 이므로 true 반환
console.log( (a > b) || (a*2 == b) );  // || 또는 > 왼쪽 식이 false 이지만, 오른쪽 식이 true 이므로 true 반환 (하나만 true여도 true 반환, 둘 다 false면 false 반환)
console.log( !(a > b) );               // ! 아닌 > 괄호 안의 식이 false지만, 앞에 !를 붙였기 때문에 ture 반환

