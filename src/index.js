import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, compose } from "redux"
import rootReducer from './reducers/RootReducer'

const STORE = createStore(rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));


ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>
    , document.getElementById("root"))
