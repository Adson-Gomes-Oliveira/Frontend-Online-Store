// Esse código foi desenvolvido em conjunto( Luiz e Adson)
import React from 'react';
import Header from './Header';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      id: '',
      text: '',
    };
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleChange = ({ target }) => {
    this.setState({
      text: target.value,
      id: target.id,
    });
  }

  getProductsList = async () => {
    const { text, id } = this.state;
    const productList = await api.getProductsFromCategoryAndQuery(id, text);
    console.log(productList.results);
    this.setState({ products: productList.results });
  }

  getCategoriesList = async () => {
    const categorieList = await api.getCategories();
    this.setState({ categories: categorieList });
  }

  getProductsFromCategory = async ({ target }) => {
    const productList = await api.getProductsFromCategoryAndQuery(target.id);
    this.setState({ products: productList.results });
    console.log(target.id);
  }

  render() {
    const { categories, text, products } = this.state;
    return (
      <section>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          data-testid="query-input"
          onChange={ this.handleChange }
          name="text"
          type="text"
          value={ text }
        />
        <button
          data-testid="query-button"
          onClick={ this.getProductsList }
          type="button"
        >
          Pesquisar
        </button>
        <Header />
        <ul>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <button
                type="button"
                data-testid="category"
                name={ categorie.name }
                id={ categorie.id }
                onClick={ this.getProductsFromCategory }
              >
                { categorie.name }
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {products.map(({ id, title, thumbnail, price }) => (
            <li data-testid="product" key={ id }>
              <h3>{title}</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Home;
