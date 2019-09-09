var fs = require('fs');
var path = require('path');
var React = require('react');
var { renderToString } = require('react-dom/server');
var { BUILD_DIR } = require('./paths');

var App = require('../../client/lib/components/App').default;
var { Provider } = require('react-redux');
var configureStore = require("../../client/lib/state/store").default;

function reactRenderer(req, res) {

  var store = configureStore();

  var app = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
);

  var html = fs
    .readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8')
    .replace('__ROOT__', app)
    .replace(
      '__REDUX__',
      JSON.stringify(store.getState())
    );
  return res.send(html);
}
module.exports = reactRenderer;