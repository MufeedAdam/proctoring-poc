import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from './Home';
import End from './End';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
      <Route path="/End" component={End} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))