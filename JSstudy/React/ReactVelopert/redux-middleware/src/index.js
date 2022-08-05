import ReactDOM from "react-dom/client";
import { configureStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";

const store = configureStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
