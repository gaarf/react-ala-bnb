import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Hello from '../containers/Hello';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Hello} />
    </Router>
  );
}
