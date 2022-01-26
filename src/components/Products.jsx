import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <section>
        {location.state.map((product) => (
          <div data-testid="product" key={ product.id } className="card">
            <Link to={ `/productDetail/${product.id}` } data-testid="product-detail-link">
              <span
                className="card-title"
              >
                { product.title }
              </span>
              <img
                className="card-img"
                src={ product.thumbnail }
                alt=""
              />
              <span
                className="card-price"
              >
                { product.price }
              </span>
            </Link>
          </div>
        ))}
      </section>
    );
  }
}

Products.propTypes = {
  location: PropTypes.shape.isRequired,
};

export default Products;
