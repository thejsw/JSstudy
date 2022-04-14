
// JS로 html 문서에 접근
console.log(document)                   // document 에 접근
console.log(document.body)              // body 에 접근
console.log(document.body.childNodes)   // 텍스트노드포함
console.log(document.body.children)

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
console.log(document.querySelector('h1').parentNode)           // 텍스트노드포함
console.log(document.querySelector('h1').parentElement)

// DOM tree 활용 - 자식 관계
console.log(document.querySelector('#list').children)
console.log(document.querySelector('#list').childNodes)
console.log(document.querySelector('#list').firstChild)        // 텍스트노드포함
console.log(document.querySelector('#list').firstElementChild)
console.log(document.querySelector('#list').lastChild)         // 텍스트노드포함
console.log(document.querySelector('#list').lastElementChild)

// DOM tree 활용 - 형제 관계
console.log(document.querySelector('ul').previousSibling)      // 텍스트노드포함  
console.log(document.querySelector('ul').previousElementSibling)  
console.log(document.querySelector('ul').nextSibling)          // 텍스트노드포함
console.log(document.querySelector('ul').nextElementSibling) 


