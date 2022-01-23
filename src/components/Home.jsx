// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React, { Component } from 'react';
import Header from './Header';
import * as api from '../services/api';

export default class Home extends Component {
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

  getCategoriesList = async () => {
    const categorieList = await api.getCategories();
    this.setState({ categories: categorieList });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Header />
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <button
                type="button"
                data-testid="category"
              >
                { categorie.name }
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
