// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default Home;
