// codigo fonte produzido em pair programing com os integrantes( Luiz e Adson).
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default class Header extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchBox: '',
  //   };
  // }

  // handleChange = (event) => {
  //   const { value, name } = event.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // searchProduct = () => {
  //   const {
  //     getSearchBox,
  //   } = this.props;
  //   const { searchBox } = this.state;
  //   getSearchBox(searchBox);
  // }

  render() {
    // const { searchBox } = this.state;

    return (
      <header>
        {/* <div>
          <input
            data-testid="query-input"
            name="searchBox"
            type="text"
            onChange={ this.handleChange }
            value={ searchBox }
          />
          <Link to="/products">
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.searchProduct }
            >
              Pesquisar
            </button>
          </Link>
        </div> */}

        <Link data-testid="shopping-cart-button" to="/shoppingCart">
          <button type="button">Carrinho</button>
        </Link>
      </header>
    );
  }
}

// Header.propTypes = {
//   getSearchBox: PropTypes.func.isRequired,
// };
