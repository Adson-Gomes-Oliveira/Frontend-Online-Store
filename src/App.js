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

const PRODUCTS_KEY = 'productsAdded';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      existProduct: false,
    };
  }

  // Função que aciona o clique do botão Comprar, faz a requisição na API do produto a ser adicionado no carrinho e retorna um objeto para o ShoppingCart contendo as informações do produto.
  // O botão que recebe a função abaixo está no componente Products.jsx.
  handleClickAddToCart = async (event) => {
    const { id } = event.target; // Recupera id do produto.
    const promise = await getProducts(id); // Faz a requisição.
    const { title, thumbnail, price, id: identify } = promise; // Desestructuring do JSON retornado.

    const result = {
      name: title,
      thumb: thumbnail,
      productPrice: price,
      id: identify,
      quantity: 1,
    }; // Novo objeto gerado.

    const productsAdded = JSON.parse(localStorage.getItem(PRODUCTS_KEY)); // Recupera os procutos adicionados
    if (!productsAdded) { // Verifica se ele existe, caso não exista, ele cria um localstogare para os produtos
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
      const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify([...products, result]));
    } else { // Caso já tenha o localstorage, ele vai a verificação para ver se produto repetido
      productsAdded.forEach((element, index) => {
        if (element.id === result.id) {
          productsAdded[index].quantity += 1; // Caso tenha produto repetido, ele atualiza a quantidade
          localStorage.setItem(PRODUCTS_KEY, JSON.stringify(productsAdded));
          this.setState({ existProduct: true }); // Atualiza o estado informando que tem produto repedito e que a quantidade já foi atualizada
        }
      });
      const { existProduct } = this.state;
      if (!existProduct) { // Caso não tenha produto repedito no localstorage, ele adiciona o novo produto ao final
        const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify([...products, result]));
      } else {
        this.setState({ existProduct: false }); // Atualiza o estage para não dar problemas futuramente
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Categories />
          <section className="main-page main-content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/cart" component={ ShoppingCart } />
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
