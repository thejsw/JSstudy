import ReactDOM from "react-dom";
import { configureStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";

const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
);
