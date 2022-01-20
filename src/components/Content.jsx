// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </Router>
      </div>
    );
  }
}
