let json = '{"key": "value"}'
localStorage.setItem('json', json);
let car = '{"name": "zenesis"}'
localStorage.setItem('car', car);


// object를 json 포맷으로 바꾸기
let person = { name : '조성원' };
let result = JSON.stringify(person);

console.log(typeof result);
console.log(result);


///// json
// javaScript object notation
// 데이터를 저장하거나 접속할 때 사용하는 경량의 data 교환 형식
// json 표현식은 사람과 기계 모두 이해하기 쉽고, 용량이 작아서 XML을 대체해 데이터 전송 등에 많이 쓰인다

// JSON 특징
// 서버와 클라이언트 간의 교류에서 일반적으로 많이 사용된다.
// 자바스크립트 객체 표기법과 아주 유사하다.
// 자바스크립트를 이용하여 JSON 형식의 문서를 쉽게 자바스크립트 객체로 변환할 수 있는 이점이 있다.
// JSON 문서 형식은 자바스크립트 객체의 형식을 기반으로 만들어졌다.
// 자바스크립트의 문법과 굉장히 유사하지만 텍스트 형식일 뿐이다.
// 다른 프로그래밍 언어를 이용해서도 쉽게 만들 수 있다.
// 특정 언어에 종속되지 않으며, 대부분의 프로그래밍 언어에서 JSON 포맷의 데이터를 핸들링 할 수 있는 라이브러리를 제공한다.


// XML vs JSON
// 데이터를 나타낼 수 있는 방식은 여러가지가 있지만, 대표적인 것이 XML이고, 이후 가장 많이 사용되는 것이 아마도 JSON일 것이다.

// XML
// 데이터 값 양쪽으로 태그가 있다.
// (HTML을 근본으로 했기에 태그라는 것이 없을 수가 없는데, 그 태그를 줄인다 해도 최소한 표현하려면 양쪽에 몇글자씩이 있어야 한다.)
// JSON
// 태그로 표현하기 보다는 중괄호({}) 같은 형식으로 하고, 값을 ','로 나열하기에 그 표현이 간단하다.
