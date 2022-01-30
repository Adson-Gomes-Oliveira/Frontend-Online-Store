import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Categories from './components/Categories';
import Header from './components/Header';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Content from './components/Content';
import './App.css';
import Checkout from './components/Checkout';

class App extends React.Component {
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
              <Route path="/productsFromSearch" component={ Content } />
              <Route path="/productsFromCategorie" component={ Content } />
              <Route exact path="/ProductDetail/:id" component={ ProductDetail } />
              <Route exact path="/checkout" component={ Checkout } />
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
