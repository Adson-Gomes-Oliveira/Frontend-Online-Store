import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Categories from './components/Categories';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchBox: '',
      categorieId: undefined,
    };
  }

  // Pega o valor do input searchBox no elemento <Header /> e salva no state
  getSearchBox = (product) => {
    this.setState({
      searchBox: product,
    });
  };

  getCategorieId = (id) => {
    this.setState({
      categorieId: id,
    });
  };

  render() {
    const { searchBox, categorieId } = this.state;
    return (
      <BrowserRouter>
        <Header getSearchBox={ this.getSearchBox } />
        <Categories getCategorieId={ this.getCategorieId } />
        <Content selectedCategory={ categorieId } productResearched={ searchBox } />
      </BrowserRouter>
    );
  }
}
