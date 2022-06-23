import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  console.log('App Loaded');

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
