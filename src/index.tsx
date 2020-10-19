import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import throttle from './utils/throttle';
import { REFRESH_RATE } from './constants';

const store = configureStore();

store.subscribe(throttle(()=>{
  console.log('saving to local');
  localStorage.setItem(
    "todos",
    JSON.stringify({
      todos: [...store.getState().todos],
      activeFilter: store.getState().activeFilter,
    })
  );
}, REFRESH_RATE));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
