// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCategories } from '../services/api';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import '../css/Content.css';

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
    return (
      <div className="main-page">
        <section className="categories">
          { categories.map((categorie) => (
            <label data-testid="category" key={ categorie.name } htmlFor={ categorie.id }>
              <input id={ categorie.id } type="radio" />
              { categorie.name }
            </label>
          )) }
        </section>
        <section className="products">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ ShoppingCart } />
          </Switch>
        </section>
      </div>
    );
  }
}
