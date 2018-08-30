import 'sanitize.css';
import '../layout.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import SnakeGame from './SnakeGame';

export default function App() {
  return (
    <Provider store={store}>
      <SnakeGame />
    </Provider>
  );
}
