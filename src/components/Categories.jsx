import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './css/Categories.css';

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categorieList: [],
    };

    this.getCategoriesFromApi = this.getCategoriesFromApi.bind(this);
    this.onHandlerRadio = this.onHandlerRadio.bind(this);
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  // Função que faz a requisição à API e redireciona para a página com os produtos recebidos
  async onHandlerRadio(event) {
    const { id } = event.target;
    const productsReceived = await getProductsFromCategoryAndQuery('', id);
    const { results } = productsReceived;
    // Nessa condição a função verifica se foi retornado algum produto
    // Se conseguir retornar ele redireciona para a url que renderiza os produtos e envia a lista
    if (results.length !== 0) {
      const { history } = this.props;
      history.push({
        pathname: '/productsFromCategorie',
        state: results,
      });
    }
  }

  // Faz a requisição para a API para retirnar as categorias
  async getCategoriesFromApi() {
    this.setState({ categorieList: await getCategories() });
  }

  render() {
    const { categorieList } = this.state;
    return (
      <section className="categories categories-style">
        <h2> Categorias de Produtos </h2>
        {categorieList.map((categorie) => (
          <label
            data-testid="category"
            key={ categorie.name }
            htmlFor={ categorie.id }
          >
            <input
              id={ categorie.id }
              type="radio"
              name="categoria"
              onChange={ this.onHandlerRadio }
            />
            {categorie.name}
          </label>
        ))}
      </section>
    );
  }
}

Categories.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Categories);
