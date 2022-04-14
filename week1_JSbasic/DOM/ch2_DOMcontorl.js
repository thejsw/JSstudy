
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.backgroundColor = '#ddd';
console.log(document.querySelector('h1'));


var ul = document.querySelector('ul');
console.log(ul);
console.log(ul.className);
console.log(ul.id);

// getAttribute('name') > name 속성을 가져온다
console.log(ul.getAttribute('class'));
console.log(ul.getAttribute('id'));

// setAttribute('name', 'value') > name 속성을 value 값으로 바꾼다
ul.setAttribute('class', 'class-list');
ul.setAttribute('id', 'id-list');
console.log(ul.getAttribute('class'));
console.log(ul.getAttribute('id'));

// classList
ul.children[0].classList.add('active');
ul.children[1].classList.remove('item');
ul.children[1].classList.toggle('list-item');
console.log(ul.children);

// createElement
var p = document.createElement('p');
document.body.appendChild(p);
p.textContent = 'javaScript createElement textContent'

var ul = document.createElement('ul');
document.body.appendChild(ul);
ul.innerHTML = '<li>list1</li><li>list2</li><li>list3</li><li>list4</li>'





