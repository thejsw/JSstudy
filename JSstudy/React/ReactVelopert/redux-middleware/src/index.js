import ReactDOM from "react-dom/client";
import { configureStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
import loggerMiddle from "./lib/loggerMiddle";

const store = configureStore(rootReducer, applyMiddleware(loggerMiddle));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
