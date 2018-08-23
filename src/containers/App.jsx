import 'sanitize.css';
import '../layout.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
// import HelloContainer from './Hello';
import TimeIsAnIllusion from './TimeIsAnIllusion';

export default function App() {
  return (
    <Provider store={store}>
      <TimeIsAnIllusion />
    </Provider>
  );
}
