import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    console.log('Cheguei');
    return (
      <section>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </section>
    );
  }
}

export default ShoppingCart;
