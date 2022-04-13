// Array 배열
var num = [1, 2, 3, 4, 5];
console.log(num);



// for 반복문과 배열을 응용한 예제 - 배열 요소를 하나씩 출력하기
for (var i=0; i<5; i++) {
    console.log(num[i]);
}



// 객체와 배열을 응용한 예제
var userList = [
    {name:'Kim', age:22},
    {name:'Lee', age:15},
    {name:'Choi', age:40},
    {name:'Jo', age:32}
];

console.log(userList[0].name);
console.log(userList[0].age);



// for 반복문, 객체, 배열을 응용한 예제 - UserList의 name과 age를 하나씩 출력하기
var userList = [
    {name:'Kim', age:22},
    {name:'Lee', age:15},
    {name:'Choi', age:40},
    {name:'Jo', age:32}
];

for (var i=0; i<userList.length; i++) {
    console.log(`User No.${i+1}`, `Name: ${userList[i].name}`, `Age: ${userList[i].age}`)
}

// 템플릿 리터럴 : 백틱(``) 사이에 구성된 문자열에 ${}기호를 통하여 변수나 연산을 삽입할 수 있다.



// 배열 메소드

// 배열.length (길이)
var array = [1,2,3,4,5];
console.log(array.length);

// 배열.join (문자열변환)
var array = [1,2,3,4,5];
console.log(array.join(','));

// 배열.push (추가)
var array = [1,2,3,4,5];
array.push(6);
console.log(array);

// 배열.pop (삭제)
var array = [1,2,3,4,5];
array.pop();
console.log(array);

// 배열.splice (시작점, 지울 개수, 넣을 것)
var array = [1,2,3,4,5];
array.splice(0,0,0);
console.log(array);

// 배열.indexOf (찾기)
var array = [1,2,3,4,5];
console.log(array.indexOf(3));