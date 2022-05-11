import React from 'react';
import ReactDOM from 'react-dom/client';

// function Component
// function App() {
//   // JSX: Javascript에서 HTML과 비슷한 문법을 제공한다.
//   // Virtual DOM: DOM을 추상화한 가상의 객체, 객체 요소를 바꿀 때마다 반복되는 렌더링으로 인한 자원 소모를 방지하기 위해 정식 렌더링 이전에 삽입한 중간 과정 
//   // Babel에 의해서 Javascript 객체로 변환한다.
//   return <h1>Hello World</h1>
// }


////// 출력
// function App(){
  // Jsx는 닫는 태그가 필수적이다
  // 줄바꿈에는 ()를 사용해야 한다
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     <p>Hello World</p>
  //   </div>
  // )
// }


///// 입출력
// function App(props) {
//   console.log(props)
//   return <h1>{props.model} {props.color}</h1>
// }


///// Alert Event
// function App() {
//   function handleChange(data) {
//     alert(data)
//   }


//   return (
//     <div>
//       <h1>Event</h1>
//       <button onClick={ () => handleChange('hello React') }>button</button>
//     </div>
//   )
// }


///// if else를 활용한 function componenet
// function Firstitem() {
//   return <h1>item1</h1>
// }

// function Seconditem() {
//   return <h1>item2</h1>
// }

// function App(props) {
//   if (props.model === 'item1') {
//     return <Firstitem/>
//   }
//   else {
//     return <Seconditem/>
//   }
// }


///// && operator를 활용한 function componenet
// let items = ['item1', 'item2', 'item3']

// function App(props) {
//   let items = props.items
  
//   console.log(items)

//   return (
//     <div>
//       <h1>items length</h1>
//       {/* items.length가 1 이상일 경우에 실행 */}
//       {
//         items.length > 1 &&
//         <h1>items length is {items.length}</h1>
//       }
//     </div>
//   )
// }


// 삼항연산자를 활용한 function componenet
function App(props) {
  console.log(props)

  return (
    <div>
      { props.model === 'item1' ? <h1>items1</h1> : <h2>unknown</h2>}
    </div>
  )
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App model='item1'/>);
