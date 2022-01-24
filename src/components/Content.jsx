// codigo fonte produzido em pair programing com os integrantes( Luiz e Adson).
// codigo fonte produzido em pair programing com os integrantes( Luiz e Rafael).
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import '../css/Content.css';
import Products from './Products';

export default class Content extends Component {
  render() {
    const { productResearched, selectedCategory } = this.props;
    return (
      <div className="main-page">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />

          {/* Estrutura do Route abaixo foi consultado no site:https://devpleno.com/router-props-2 */}
          <Route
            path="/products"
            render={ () => (
              <Products
                categoryId={ selectedCategory }
                productInput={ productResearched }
              />
            ) }
          />
        </Switch>
      </div>
    );
  }
}

Content.propTypes = {
  productResearched: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
