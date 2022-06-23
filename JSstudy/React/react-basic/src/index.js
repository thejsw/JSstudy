import React, { useState, useEffect, useRef } from 'react';
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


///// 삼항연산자를 활용한 function componenet
// function App(props) {
//   console.log(props)

//   return (
//     <div>
//       { props.model === 'item1' ? <h1>items1</h1> : <h2>unknown</h2>}
//     </div>
//   )
// }


///// map을 활용한 function component
// function App(model) {
//   let items = ['item1', 'item2', 'item3']

//   return (
//     <div>
//       <h1>items</h1>
//       <ul>
//         {items.map(item => <li>{item}</li>)}
//       </ul>
//     </div>
//   )
// }


///// form
// function App() {

//   function handleChange(e) {
//     console.log(e.currentTarget.value)
//   }
//   function handleSubmit(e) {
//     e.preventDefault()
//     alert('제출되었습니다')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label> 이메일을 입력하세요 {""} {/* 띄어쓰기 */}
//         {/* <input type="text" placeholder='email' onChange={handleChange}> */}
//           <
//             input type="text"
//             placeholder='email'
//             onChange={handleChange}
//             style={{ padding: '10px', backgroundColor: 'black', color: '#fff' }}
//           />
//         {/* </input> */}
//       </label>
//     </form>
//   )
// }


///// React Hooks: 함수형태의 컴포넌트에서 사용되는 기술들, 클래스형 컴포넌트 개선 

///// useState: 상태관리, useEffect: 렌더링 이후 작업 설정, useRef: 특정 DOM 선택

// function App() {
//   console.log('Switch!')
//   // useState: 렌더링된 데이터를 변경할 때 쓰는 함수
//   // 구조 분해 할당, let [초기값, state를 바꾸는 함수]
//   let [data, setData] = useState('Apple')
  
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={() => setData(
//         )}>button</button>
//     </div>
//   )
// }

///// useEffect: 함수 컴포넌트 안에서 side effect를 실행함
///// useEffect(callback(effect), dependency)

// function App() {
//   console.log('App loaded!')
//   let [count, setCount] = useState(0)

//   // side effect
//   useEffect(() => {
//     document.title = `${count}번 클릭했습니다`
//   })

//   return (
//     <div>
//       <p>
//         {count}번 클릭했습니다
//       </p>
//       <button onClick={() => setCount(count + 1)}>button</button>
//     </div>
//   )
// }

// function App() {
//   console.log('App Loaded!')
//   let [count, setCount] = useState(0)

//   console.log(count)

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1)
//     }, 1000)
//   }, [])
//   // useEffect 함수를 실행할 때, settimeout에서 count 값이 변하며 컴포넌트가 계속 리렌더링하는 문제 발생
//   // [] 빈 array를 추가하여 컴포넌트가 처음 로드되었을때만 실행하도록 유도
// }

// function App() {
//   console.log('App loaded')

//   let [data, setData] = useState(0)

//   useEffect(() => {
//     console.log('..')
//   }, [data])
//   // [dependency, ..]
//   // 빈 array가 아닌 dependency가 추가될 경우, 업데이트 될 때마다 실행

//   function handleChange() {
//     setData(1)
//   }

//   return (
//     <div>
//       <h1>...</h1>
//       <button onClick={handleChange}>button</button>
//     </div>
//   )
// }


///// useRef()
/////
// function App() {
//   let inputElement = useRef()
//   console.log(inputElement)

//   useEffect(() => {
//     console.log(inputElement)
//     inputElement.current.focus()
//     inputElement.current.innerHTML = 'made by useRef()'
//     inputElement.current.style.border = '5px solid red'
//     inputElement.current.style.color = 'blue'
//   })

//   return (
//     <div>
//       <h1>useRef</h1>
//       <h1 ref={inputElement}></h1>
//     </div>
//   )
// }





// Form
function Form(props) {
  console.log('Form Loaded')

  const {name, setName} = useState('')

  // 새로운 Todo item을 추가
  // input의 value를 다시 빈 칸으로 만든다
  function handleSubmit(e) {
    e.preventDefault()
    props.addTask(name)
    setName('')
  }

  // name값을 변경시킨다
  function handleChange(e) {
    // console.log(e.target.value)
    setName(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

// FilterButton
function FilterButton(props) {
  return (
    <button>(props.name)</button>
  )
}

// Todo
function Todo(props) {
  console.log('Todo Loaded')
  return (
    <>
      <div>
        <input 
        type="checkbox"
        // props.completed: true or false
        defaultChecked={props.completed}
        // task의 completed를 변경시킨다
        onChange={props.toggleTaskCompleted(props.id)}
        />
        {props.name}
      </div>
      <button>Edit</button>
      {/* {task를 삭제한다} */}
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
    </>
  )
}

const Filter_map = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

// 필터 이름을 Array로 리턴한다.
const Filter_names = Object.keys(Filter_map)
console.log(Filter_names)

// 컴포넌트들을 모으는 곳, App에서 만든 함수를 다른 컴포넌트에 배분할 수 있다
function App(props) {
  console.log('App Loaded')
// useState
  const {tasks, setTasks} = useState(props.tasks)
// 필터 버튼
  const filterList = Filter_names.map(name => <FilterButton key={name} name={name}/>)
// task 리스트
  const taskList = tasks
  .map(task => (
  <Todo 
    id={task.id} 
    deleteTask={deleteTask}
    completed={task.completed}
    key={task.id}
    name={task.name}
    toggleTaskCompleted={toggleTaskCompleted}
    />))
// 새로운 task를 추가한다
  function addTask(name) {
    const newTask = {
      id: "todo-" + Math.random(),
      name: name,
      completed: false
    }
    console.log(newTask)

    setTasks([...tasks, newTask])
  }
// task를 삭제한다
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }
// task의 completed 상태를 변경시킨다
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !tasks.completed}
      }
      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <div>
      <h1>What needs to be done?</h1>
      <form addTask={addTask}></form>
      {filterList}
      <ul>
        {taskList}
      </ul>
    </div>
  )
}
// App 컴포넌트에 통과되는 props
const DATA = [
  { id: 'todo-0', name: '운동하기', completed: true},
  { id: 'todo-1', name: '공부하기', completed: true},
  { id: 'todo-2', name: '여행가기', completed: true},
]

// 컴포넌트
// App
// Form
// filterButton
// Todo


// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

