import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from './reducers/Reducers'

const STORE = createStore(rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));


ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>
    , document.getElementById("root"))
