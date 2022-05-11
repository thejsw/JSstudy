import React from 'react';
import ReactDOM from 'react-dom/client';

// function Component
// function App() {
//   // JSX: Javascript에서 HTML과 비슷한 문법을 제공한다.
//   // Virtual DOM: DOM을 추상화한 가상의 객체, 객체 요소를 바꿀 때마다 반복되는 렌더링으로 인한 자원 소모를 방지하기 위해 정식 렌더링 이전에 삽입한 중간 과정 
//   // Babel에 의해서 Javascript 객체로 변환한다.
//   return <h1>Hello World</h1>
// }

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

function App(props) {
  console.log(props)
  return <h1>{props.model} {props.color}</h1>
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App model="제네시스" color="블랙" />);
