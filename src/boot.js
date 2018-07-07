import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'sanitize.css';
import './layout.css';
import store from './store';
import Routes from './routes';

const App = () => createElement(Provider, { store }, createElement(Routes));

ReactDOM.render(
  createElement(hot(module)(App)),
  document.getElementById('root'),
);
