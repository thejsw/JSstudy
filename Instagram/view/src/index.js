import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  fetch('http://localhost:3000')
  .then(res => res.text())
  .then(result => console.log(result))

  return (
    <h1>Front Server</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
