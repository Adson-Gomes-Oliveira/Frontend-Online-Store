import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchBox: '',
    };
  }

  // Pega o valor do input searchBox no elemento <Header /> e salva no state
  getSearchBox = (product) => {
    this.setState({
      searchBox: product,
    });
  }

  render() {
    const { searchBox } = this.state;
    return (
      <BrowserRouter>
        <Header getSearchBox={ this.getSearchBox } />
        <Content productResearched={ searchBox } />
      </BrowserRouter>
    );
  }
}
