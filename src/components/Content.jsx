// codigo fonte produzido em pair programing com os integrantes( Luiz e Adson).
// codigo fonte produzido em pair programing com os integrantes( Luiz e Rafael).
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import '../css/Content.css';
import Products from './Products';

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.getCategoriesList = this.getCategoriesList.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  async getCategoriesList() {
    const categoriesReceived = await getCategories();
    this.setState({ categories: [...categoriesReceived] });
  }

  render() {
    const { categories } = this.state;
    const { productResearched } = this.props;
    return (
      <div className="main-page">
        <section className="categories">
          {categories.map((categorie) => (
            <label
              data-testid="category"
              key={ categorie.name }
              htmlFor={ categorie.id }
            >
              <input id={ categorie.id } type="radio" />
              {categorie.name}
            </label>
          ))}
        </section>
        <section className="products">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ ShoppingCart } />

            {/* Estrutura do Route abaixo foi consultado no site:https://devpleno.com/router-props-2 */}
            <Route
              path="/products"
              render={ () => <Products product={ productResearched } /> }
            />
          </Switch>
        </section>
      </div>
    );
  }
}

Content.propTypes = {
  productResearched: PropTypes.string.isRequired,
};
