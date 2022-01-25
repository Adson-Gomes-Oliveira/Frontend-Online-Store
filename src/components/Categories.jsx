import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import './css/Categories.css';

export default class Categories extends Component {
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
    console.log(categoriesReceived);
    this.setState({ categories: [...categoriesReceived] });
  }

  onHandleRadio = (event) => {
    const {
      getCategorieId,
    } = this.props;
    const { id } = event.target;
    getCategorieId(id);
  }

  render() {
    const { categories } = this.state;
    return (
      <section className="categories">
        <h2>Categorias de Produtos</h2>
        {categories.map((categorie) => (
          <Link className="categories-style" key={ categorie.id } to="/products">
            <label
              data-testid="category"
              key={ categorie.name }
              htmlFor={ categorie.id }
            >
              <input
                id={ categorie.id }
                type="radio"
                name="categoria"
                onClick={ this.onHandleRadio }
              />
              {categorie.name}
            </label>
          </Link>
        ))}
      </section>
    );
  }
}

Categories.propTypes = {
  getCategorieId: PropTypes.func.isRequired,
};
