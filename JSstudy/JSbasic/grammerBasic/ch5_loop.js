// 반복문

// for 반복문
// 변수 i가 0부터 4까지 1씩 증가하는 반복문
for (var i=0; i<5; i++) {
    console.log(i);
}


// 1부터 5까지 더하는 반복문
var num = 0;
for (var i=0; i<5; i++) {
    num += i
}
console.log(num);


// array.forEach(function(item, index, array))
// 콜백 개념 활용 > array의 길이만큼 callback 함수가 반복 실행된다.
var fruits = ['apple', 'orange', 'banana'];
var result = [];
var listindex = [];

fruits.forEach(function (item, index, array) {
    result.push(item.toUpperCase());
    listindex.push(index);
})

console.log(result);
console.log(listindex);


// var newArray = array.filter(function (item))
// 콜백 개념 활용
var list = [1,2,3,4,5];
var newArray = list.filter(function (item) {
    if (item > 3) {
        return item;
    }
})

console.log(newArray);