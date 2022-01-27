import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Categories from './components/Categories';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import './App.css';
import { getProducts } from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productsInCart: [],
    };
  }

  // Função que aciona o clique do botão Comprar, faz a requisição na API do produto a ser adicionado no carrinho e retorna um objeto para o ShoppingCart contendo as informações do produto.
  // O botão que recebe a função abaixo está no componente Products.jsx.
  handleClickAddToCart = async (event) => {
    const { id } = event.target; // Recupera id do produto.
    const promise = await getProducts(id); // Faz a requisição.
    const { title, thumbnail, price, id: identify } = await promise; // Desestructuring do JSON retornado.
    const { productsInCart } = this.state; // Desestructuring do estado para adicionar o novo objeto (produto), ao array.

    const result = {
      name: title,
      thumb: thumbnail,
      productPrice: price,
      id: identify,
    }; // Novo objeto gerado.

    this.setState({ productsInCart: [...productsInCart, result] }); // Objeto adicionado ao array de objetos || Produto adicionado a lista de produtos.
  }

  render() {
    const { productsInCart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Categories />
          <section className="main-page main-content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route
                path="/cart"
                render={ () => <ShoppingCart productsAdded={ productsInCart } /> }
              />
              <Route
                path="/productsFromSearch"
                render={ (props) => (
                  <Products { ...props } handleClick={ this.handleClickAddToCart } />) }
              />
              <Route
                path="/productsFromCategorie"
                render={ (props) => (
                  <Products { ...props } handleClick={ this.handleClickAddToCart } />) }
              />
              <Route exact path="/ProductDetail/:id" component={ ProductDetail } />
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
