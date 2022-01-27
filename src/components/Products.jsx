import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Products.css';

class Products extends React.Component {
  render() {
    const { location } = this.props;
    const { handleClick } = this.props;
    return (
      <section className="list_products">
        {location.state.map((product) => (
          <div data-testid="product" key={ product.id }>
            <Link
              to={ `/productDetail/${product.id}` }
              style={ { textDecoration: 'none', color: 'black' } }
              data-testid="product-detail-link"
            >
              <div className="card">
                <span
                  className="card-title"
                >
                  <p>{ product.title }</p>
                </span>
                <img
                  className="card-img"
                  src={ product.thumbnail }
                  alt=""
                />

                <div className="card-add">
                  <span
                    className="card-price"
                  >
                    { product.price }
                  </span>
                </div>
              </div>
            </Link>
            <button
              id={ product.id }
              type="button"
              data-testid="product-add-to-cart"
              className="card-button"
              onClick={ handleClick }
            >
              Comprar
            </button>
          </div>
        ))}
      </section>
    );
  }
}

Products.propTypes = {
  location: PropTypes.shape.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Products;
