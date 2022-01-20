// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </div>
    );
  }
}
