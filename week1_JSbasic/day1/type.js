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
