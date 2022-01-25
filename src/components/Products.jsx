import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import './css/Products.css';

export default class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  componentDidUpdate() {
    this.getProductData();
  }

  getProductData = async () => {
    const { productInput, categoryId } = this.props;
    const data = await getProductsFromCategoryAndQuery(productInput, categoryId);
    const objectData = data.results;

    this.setState({
      products: objectData,
    });
  }

  renderProducts = () => {
    const { products } = this.state;
    return (
      products.map((product) => {
        const { title, thumbnail, price } = product;
        return (
          <div data-testid="product" key={ Math.random() } className="card">
            <span
              className="card-title"
              key={ Math.random() }
            >
              { title }
            </span>
            <img
              className="card-img"
              key={ Math.random() }
              src={ thumbnail }
              alt=""
            />
            <span
              className="card-price"
              key={ Math.random() }
            >
              { price }
            </span>
          </div>
        );
      })
    );
  }

  render() {
    const { products } = this.state;
    return (
      <section className="list__products">
        {products.length > 0
          ? this.renderProducts()
          : <span>Nenhum produto foi encontrado</span>}
      </section>
    );
  }
}

Products.propTypes = {
  productInput: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};
