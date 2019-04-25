import React from "react";
import ReactDOM from "react-dom";
import ROOTContainer from "./Containers/ROOTContainer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./store/Reducers/rootReducer";
import ErrorHandler from "./service/ErrorHandler";
import "./styles/index.scss";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk),
      applyMiddleware(ErrorHandler)
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ROOTContainer />
  </Provider>,
  document.getElementById("root")
);
