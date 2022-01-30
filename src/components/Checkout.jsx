import React from 'react';
import './css/Checkout.css';

class Checkout extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     productsToBuy: [],
  //   };
  // }

  recoverCartProducts = () => {
    const products = JSON.parse(localStorage.getItem('productsAdded'));
    return products;
  }

  render() {
    const recover = this.recoverCartProducts();
    const pricesToCalc = [0];
    const ListOfProductsToBuy = recover.map((product) => {
      const { id, name, thumb, quantity, price } = product;
      const cost = quantity * price;
      pricesToCalc.push(cost);
      return (
        <li className="product" key={ id }>
          <div className="infos-products">
            <img src={ thumb } alt={ name } />
            <span>{ name }</span>
            <div className="divisor-name-price" />
            <span>{quantity}</span>
            <div className="divisor-name-price" />
            <span className="price">{`R$ ${cost.toFixed(2).replace('.', ',')}`}</span>
            <span>{`ID do produto: ${id}`}</span>
          </div>
        </li>
      );
    });
    const totalCost = pricesToCalc.reduce((prev, crr) => crr + prev);
    return (
      <section className="checkout-page">
        <div className="check-products">
          <h3>Revise seus Produtos</h3>
          <ul className="products-list">
            {ListOfProductsToBuy}
            <span className="totalCost">
              {'Valor Total: R$ '}
              {totalCost.toFixed(2).replace('.', ',')}
            </span>
            <div className="more-info">
              <p>
                Vendido com segurança e confiança pela
              </p>
              <span> Frontend Online Store ! </span>
            </div>
            <div className="divisor-items-checkout" />
          </ul>
        </div>
        <div className="buyer-infos">
          <h3>Informações do Comprador</h3>
          <form>
            <label htmlFor="name">
              <input
                type="text"
                style={ { width: '250px' } }
                name="name"
                data-testid="checkout-fullname"
                placeholder="Nome Completo"
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                style={ { width: '300px' } }
                name="email"
                data-testid="checkout-email"
                placeholder="Email válido"
              />
            </label>
            <label htmlFor="CPF">
              <input
                type="text"
                maxLength="11"
                name="CPF"
                data-testid="checkout-cpf"
                placeholder="CPF válido (sem pontos ou virgulas)"
              />
            </label>
            <label htmlFor="phone">
              <input
                type="text"
                name="phone"
                maxLength="13"
                minLength="11"
                data-testid="checkout-phone"
                placeholder="Telefone/Celular"
              />
            </label>
            <label htmlFor="cep">
              <input
                type="text"
                name="cep"
                maxLength="13"
                minLength="11"
                data-testid="checkout-cep"
                placeholder="CEP"
              />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                style={ { width: '600px' } }
                name="address"
                maxLength="13"
                minLength="11"
                data-testid="checkout-address"
                placeholder="Endereço"
              />
            </label>
            <label htmlFor="news-req">
              <input
                className="check"
                type="checkbox"
                name="news-req"
                data-testid="checkout-news-req"
              />
              Deseja receber promoções e atualizações de produtos?
            </label>
            <label htmlFor="pol-req">
              <input
                className="check"
                type="checkbox"
                name="pol-req"
                data-testid="checkout-pol-req"
              />
              Concordo e afirmo que li a politica de uso de dados
            </label>
          </form>
        </div>
        <button type="button"> Finalizar Compra </button>
      </section>
    );
  }
}

export default Checkout;
