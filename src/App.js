import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Categories from './components/Categories';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Categories />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/productsFromSearch" component={ Products } />
        <Route path="/productsFromCategorie" component={ Products } />
        <Route exact path="/ProductDetail/:id" component={ ProductDetail } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
