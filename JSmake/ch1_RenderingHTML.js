// ul 요소들을 만든다.
var list = ['item1', 'item2', 'item3'];
var ul = document.createElement('ul');


// li 요소들을 만든 뒤에 ul에 붙힌다. > for of 문법
for (i of list) {
    var li = document.createElement('li');
    li.innerHTML = i;
    ul.appendChild(li)
}

// li 요소들을 만든 뒤에 ul에 붙힌다. > forEach(item,index,array) 메소드
list.forEach(function (item) {
    var li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li)
})


// 완성된 ul을 body에 추가한다.
document.body.appendChild(ul);



// 객체를 HTML에 렌더링하기
var CarList = [
    { name : 'Car1', design : 6, cost : 1},
    { name : 'Car2', design : 8, cost : 2},
    { name : 'Car3', design : 9, cost : 3},
    { name : 'Car4', design : 7, cost : 4},
]
var ul = document.createElement('ul');


for (car of CarList) {
    var li = document.createElement('li');
    li.innerHTML = `<b>name</b> : ${car.name} || <b>design</b> : ${car.design} || <b>cost</b> : ${car.cost}`;
    ul.appendChild(li);
}

document.body.appendChild(ul);


// 객체를 테이블 형태로 렌더링하기
var CarList = [
    { name : 'Car1', design : 6, cost : 1},
    { name : 'Car2', design : 8, cost : 2},
    { name : 'Car3', design : 9, cost : 3},
    { name : 'Car4', design : 7, cost : 4},
]
var table = document.querySelector('table');   // querySelector를 이용해서 table에 접근하기

for (car of CarList) {
    var tr = document.createElement('tr');     // createElement를 이용해서 tr 만들기
    tr.innerHTML =                             // innerHTML을 이용해서 td 리스트 만들기
    `
    <td>${car.name}</td>
    <td>${car.design}</td>
    <td>${car.cost}</td>
    `;
    table.appendChild(tr);                     // qppendChild를 이용해서 table에 tr 리스트 추가하기
}
