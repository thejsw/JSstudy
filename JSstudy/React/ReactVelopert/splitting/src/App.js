// import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
// import loadable from '@loadable/component';
// const SplitMe = loadable(() => import('./SplitMe'), {
//   fallback: <div>loading...</div>
// });

function App() {
  const onClick = () => {
    import("./notify").then((result) => result.default());
  };
  // const [visible, setVisible] = useState(false);
  // const onClick = () => {
  //   setVisible(true);
  // };
  // const onMouseOver = () => {
  //   SplitMe.preload();
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        {/* {visible && <SplitMe />} */}
      </header>
    </div>
  );
}

export default App;
