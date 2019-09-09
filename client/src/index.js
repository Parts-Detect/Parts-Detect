import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from "./state/store";
import { Provider } from "react-redux";

import './styles/index.css';

import * as serviceWorker from './serviceWorker';

const state = window.__INITIAL_STATE__;
const store = configureStore({ state });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
