import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS_KEY = 'productsAdded';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const productsAdded = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    if (productsAdded) {
      this.setState({ products: productsAdded });
    }
  }

  render() {
    const { products } = this.state;

    const listOfProductsInCart = products.map((product) => {
      const { name, id, thumb, productPrice, quantity } = product;

      return (
        <li key={ id }>
          <h3 data-testid="shopping-cart-product-name">{ name }</h3>
          <img src={ thumb } alt={ name } />
          <span>{ productPrice }</span>
          <span data-testid="shopping-cart-product-quantity">
            Quantidade:
            { ` ${quantity}` }
          </span>
        </li>
      );
    });
    const emptyCartMessage = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return (
      <section>
        { products.length > 0 ? <ul>{listOfProductsInCart}</ul> : emptyCartMessage}
        <Link to="/checkout">
          <button data-testid="checkout-products" type="button">Realizar Compra</button>
        </Link>
      </section>
    );
  }
}

export default ShoppingCart;
