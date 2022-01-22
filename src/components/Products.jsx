import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
    const { product } = this.props;
    const data = await getProductsFromCategoryAndQuery(product);
    const objectData = data.results;

    this.setState({
      products: objectData,
    });
  }

  render() {
    console.log('teste');
    const { products } = this.state;
    return (
      <section className="list__products">
        {
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
        }
      </section>
    );
  }
}

Products.propTypes = {
  product: PropTypes.string.isRequired,
};
