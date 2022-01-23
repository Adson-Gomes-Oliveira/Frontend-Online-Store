import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/ShoppingCart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
