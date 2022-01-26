import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section>
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
      </section>
    );
  }
}

export default ShoppingCart;
