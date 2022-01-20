// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      searchBox: '',
    };
  }

  // Tratando a mudança do input da caixa de pesquisa

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchBox } = this.state;
    return (
      <header>
        <div>
          <input
            name="searchBox"
            type="text"
            onChange={ this.handleChange }
            value={ searchBox }
          />
        </div>
      </header>
    );
  }
}
