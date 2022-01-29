import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products';
import './css/Products.css';

class Content extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <section className="list_products">
        {location.state.map((product) => (
          <Products
            key={ product.id }
            id={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
          />
        ))}
      </section>
    );
  }
}

Content.propTypes = {
  location: PropTypes.shape.isRequired,
};

export default Content;
