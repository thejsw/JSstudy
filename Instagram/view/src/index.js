import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  console.log('App Loaded');

  // 데이터 가져오기
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
    .then(res => res.text())
    .then(result => setData(result))
    .catch(error => setError(error))
    .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <h1>Error</h1>
  }

  if (!isLoaded) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <h1>Front Server</h1>
      <p>data from BE</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
