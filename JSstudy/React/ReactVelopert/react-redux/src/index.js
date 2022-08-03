import ReactDOM from 'react-dom';
import { configureStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import './index.css';
import App from './App';
import React from 'react';

const store = configureStore(rootReducer, composeWithDevTools);

ReactDOM.render(
  // 스토어를 사용할 수 있게 하는 컴포넌트
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
