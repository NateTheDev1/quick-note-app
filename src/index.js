import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux'
import reducerIndex from "./reducers/reducerIndex";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

const store = createStore(reducerIndex, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />   
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
