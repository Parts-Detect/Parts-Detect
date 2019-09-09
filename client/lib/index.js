"use strict";

var _interopRequireWildcard = require("/Users/GemmaGarciaLopez/Desktop/parts_detect_repo/client/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/GemmaGarciaLopez/Desktop/parts_detect_repo/client/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./components/App"));

var _store = _interopRequireDefault(require("./state/store"));

var _reactRedux = require("react-redux");

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

var state = window.__INITIAL_STATE__;
var store = (0, _store.default)({
  state: state
});

_reactDom.default.render(_react.default.createElement(_reactRedux.Provider, {
  store: store
}, _react.default.createElement(_App.default, null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
