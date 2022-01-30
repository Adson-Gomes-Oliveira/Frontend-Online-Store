import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import logoFOS from '../assets/logo_frontendOnlineStore.svg';
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
        <div className="section-header">

          <Link to="/">
            <img className="site-logo" src={ logoFOS } alt="logo" />
          </Link>
          <div className="search-box-style">
            <input
              onChange={ this.onHandleInput }
              value={ inputText }
              type="text"
              data-testid="query-input"
              placeholder="Pesquisar..."
            />

            <button
              onClick={ this.getProductsFromInput }
              type="button"
              data-testid="query-button"
              className="material-icons"
            >
              search
            </button>
          </div>

          <div className="sign-in">
            <span className="material-icons icon-user">
              manage_accounts
            </span>
            <span>
              Entre
              <br />
              ou Cadastre-se
            </span>
          </div>

          <div>
            <Link data-testid="shopping-cart-button" to="/cart">
              <button className="cart-button material-icons" type="button">
                shopping_cart
              </button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

// Final Code

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
