import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    console.log(id);
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((categorie) => (
          <Link key={ categorie.id } to="/products">
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
          </Link>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  getCategorieId: PropTypes.func.isRequired,
};
