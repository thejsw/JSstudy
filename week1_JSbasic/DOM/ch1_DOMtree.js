
// JS로 html 문서에 접근
console.log(document)                   // document 에 접근
console.log(document.body)              // body 에 접근
console.log(document.body.children)     // childeren 에 접근 > 
console.log(document.body.childNodes)   // childNodes 에 접근 > children + text(줄바꿈) + element(주석) 

// getElementsBy
console.log(document.getElementsByTagName('h1'))      // 태그 접근
console.log(document.getElementsByClassName('item'))  // 클래스 접근
console.log(document.getElementById('list'))          // 아이디 접근

// querySelector - css 선택자로 접근
console.log(document.querySelector('h1'))        // 태그 접근
console.log(document.querySelector('.item'))     // 클래스 접근
console.log(document.querySelector('#list'))     // 아이디 접근
console.log(document.querySelectorAll('.item'))  // 모든 노드를

// DOM tree 활용 - 부모 관계
console.log(document.querySelector('h1').parentNode)    
console.log(document.querySelector('h1').parentElement)

// DOM tree 활용 - 자식 관계
console.log(document.querySelector('#list').children)
console.log(document.querySelector('#list').childNodes)
console.log(document.querySelector('#list').firstChild)
console.log(document.querySelector('#list').firstElementChild)
console.log(document.querySelector('#list').lastChild)
console.log(document.querySelector('#list').lastElementChild)

// DOM tree 활용 - 형제 관계
console.log(document.querySelector('ul').previousSibling)    
console.log(document.querySelector('ul').previousElementSibling)  
console.log(document.querySelector('ul').nextSibling) 
console.log(document.querySelector('ul').nextElementSibling) 


