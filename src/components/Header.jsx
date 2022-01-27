import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import './css/Header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: '',
    };

    this.onHandleInput = this.onHandleInput.bind(this);
    this.getProductsFromInput = this.getProductsFromInput.bind(this);
  }

  onHandleInput(event) {
    this.setState({ inputText: event.target.value });
  }

  // Função que faz a requisição à API e redireciona para a página com os produtos recebidos
  async getProductsFromInput() {
    const { inputText } = this.state;
    const { history } = this.props;
    const productsReceived = await getProductsFromCategoryAndQuery('', inputText);
    const { results } = productsReceived;
    // Aqui a função redireciona para a url que renderiza os produtos e envia a lista com esses produtos recebidos
    history.push({
      pathname: '/productsFromSearch',
      state: results,
    });
  }

  render() {
    const { inputText } = this.state;
    return (
      <header>
        <h1>Frontend Online Store</h1>

        <div className="search-box-style">
          <div>
            <input
              onChange={ this.onHandleInput }
              value={ inputText }
              type="text"
              data-testid="query-input"
            />
            <button
              onClick={ this.getProductsFromInput }
              type="button"
              data-testid="query-button"
              className="search-button"
            >
              Pesquisar
            </button>
          </div>

          <div>
            <Link data-testid="shopping-cart-button" to="/cart">
              <button className="cart-button" type="button">Carrinho</button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
