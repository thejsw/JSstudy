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
    console.log('User No.' + (i+1), '  Name: ' + userList[i].name, '  Age: ' + userList[i].age)
}