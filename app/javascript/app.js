// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Routing from './routes/index';

function App() {
  return (<h1>Hello World! In app/javascript/application.js</h1>);
}

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root'),
);
