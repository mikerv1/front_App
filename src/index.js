import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { PostsProvider } from "./store/marginaliaStore/store";

ReactDOM.render(
  <Provider store={store}>
    <PostsProvider>
      <App />
    </PostsProvider>
  </Provider>,
  document.getElementById("root")
);
