import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

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
      <form className="categories">
        {categories.map((categorie) => (
          <label
            data-testid="category"
            key={ categorie.name }
            htmlFor={ categorie.id }
          >
            <input
              id={ categorie.id }
              type="radio"
              name="categoria"
              onChange={ this.onHandleRadio }
            />
            {categorie.name}
          </label>
        ))}
      </form>
    );
  }
}

Categories.propTypes = {
  getCategorieId: PropTypes.func.isRequired,
};
