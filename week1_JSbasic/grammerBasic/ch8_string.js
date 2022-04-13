// 문자열 활용

// 줄바꿈
console.log("hello!\nworld!");
// 순서로 문자 찾기
console.log("hello world!"[0]);
// 문자열.indexOf (문자로 순서 찾기) > 처음 찾은 값만 보여줌
console.log("hello! world!".indexOf('o'));

// 문자열.length (길이)
console.log("hello! world!".length);
// 문자열.split (구분자) > 배열로 저장
console.log("hello! world!".split(' '));
// 문자열.slice (시작,끝 자르기) > 배열 기반
console.log("hello! world!".slice(0,5));

// 문자열.concat (병합)
var string1 = 'string'
var string2 = 'string'
var str = console.log(string1.concat(string2));