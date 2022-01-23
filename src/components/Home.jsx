// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React, { Component } from 'react';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Header />
      </section>
    );
  }
}
