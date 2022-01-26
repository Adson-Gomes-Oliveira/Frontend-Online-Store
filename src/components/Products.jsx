import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <section>
        {location.state.map((product) => (
          <div data-testid="product" key={ product.id } className="card">
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
