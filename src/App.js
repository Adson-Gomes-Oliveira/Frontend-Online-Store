import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Categories from './components/Categories';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchBox: '',
      categorieId: '',
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
        <div className="main-page">
          <Categories getCategorieId={ this.getCategorieId } />
          <Content selectedCategory={ categorieId } productResearched={ searchBox } />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
