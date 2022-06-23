// 조건문

// if 조건문
// 조건이 true면 내용이 실행된다.
// a가 18보다 크다는 조건을 성립했기 때문에, console.log가 실행된다.
var num = 20;

if (num > 18) {
    console.log( 'true' )
}   

// else if, else를 통해서 조건문을 더 구체적으로 만들 수 있다.
// else if는 상황에 따라 여러 개를 만들 수 있으며, else는 하나 밖에 만들 수 없다. 
// else는 조건이 if와 else if에 충족되지 않으면, 자동으로 실행된다.
var num = 0;

if (num > 10) {
    console.log( '10보다 큼' )
} else if (num > 5) {
    console.log( '5보다 큼')
} else if (num > 1) {
    console.log( '1보다 큼')
} else {
    console.log ( '1보다 작거나 같음')
}