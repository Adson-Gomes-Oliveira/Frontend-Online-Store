import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { productsAdded } = this.props;

    const listOfProductsInCart = productsAdded.map((product) => {
      const { name, id, thumb, productPrice } = product;

      return (
        <li key={ id }>
          <h3 data-testid="shopping-cart-product-name">{ name }</h3>
          <img src={ thumb } alt={ name } />
          <span>{ productPrice }</span>
        </li>
      );
    });

    const emptyCartMessage = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return (
      <section>
        {productsAdded.length > 0 ? <ul>{listOfProductsInCart}</ul> : emptyCartMessage}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  productsAdded: PropTypes.shape.isRequired,
};

export default ShoppingCart;
