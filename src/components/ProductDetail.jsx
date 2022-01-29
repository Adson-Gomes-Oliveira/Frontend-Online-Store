import React from 'react';
import PropTypes from 'prop-types';

const PRODUCTS_KEY = 'productsAdded';
class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      existProduct: false,
      productId: '',
      productTitle: '',
      productThumb: '',
      productPrice: 0,
      productAttr: [],
    };

    this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
    this.saveInformations = this.saveInformations.bind(this);
  }

  componentDidMount() {
    this.saveInformations();
  }

  // Função que aciona o clique do botão Comprar, faz a requisição na API do produto a ser adicionado no carrinho e retorna um objeto para o ShoppingCart contendo as informações do produto.
  // O botão que recebe a função abaixo está no componente Products.jsx.
  handleClickAddToCart = () => {
    const { productId, productTitle, productThumb, productPrice } = this.state;
    const result = {
      name: productTitle,
      thumb: productThumb,
      Price: productPrice,
      id: productId,
      quantity: 1,
    }; // Novo objeto gerado.

    const productsAdded = JSON.parse(localStorage.getItem(PRODUCTS_KEY)); // Recupera os procutos adicionados
    if (!productsAdded) { // Verifica se ele existe, caso não exista, ele cria um localstogare para os produtos
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify([]));
      const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify([...products, result]));
      this.setState({ existProduct: true }); // Atualiza o estado informando que tem produto repedito e que a quantidade já foi atualizada
    } else { // Caso já tenha o localstorage, ele vai fazer a verificação para ver se tem produto repetido
      this.setState({ existProduct: true }); // Atualiza o estado informando que tem produto repedito e que a quantidade já foi atualizada
      productsAdded.forEach((element, index) => {
        if (element.id === result.id) {
          productsAdded[index].quantity += 1; // Caso tenha produto repetido, ele atualiza a quantidade
          localStorage.setItem(PRODUCTS_KEY, JSON.stringify(productsAdded));
        }
      });
      const { existProduct } = this.state;
      if (!existProduct) { // Caso não tenha produto repedito no localstorage, ele adiciona o novo produto ao final
        console.log('veio aqui');
        const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify([...products, result]));
      }
    }
  }

  saveInformations() {
    const { location } = this.props;

    this.setState({
      productId: location.productInfo.idProduct,
      productTitle: location.productInfo.titleProduct,
      productThumb: location.productInfo.thumbProduct,
      productPrice: location.productInfo.priceProduct,
      productAttr: location.productInfo.attrProduct,
    });
  }

  render() {
    const { productTitle, productThumb, productPrice, productAttr } = this.state;
    return (
      <section>
        <p data-testid="product-detail-name">{productTitle}</p>
        <p>
          `R$ $
          { productPrice }
          `
        </p>
        <img src={ productThumb } alt="product-name" />
        <section>
          <p>Especificações Técnicas</p>
          {productAttr && productAttr.map((atributos) => (
            <div key={ atributos.id }>
              <span>
                {`${atributos.name}:${atributos.value_name}`}
              </span>
            </div>
          ))}
        </section>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          className="card-button"
          onClick={ this.handleClickAddToCart }
        >
          Comprar
        </button>
      </section>
    );
  }
}
ProductDetails.propTypes = {
  location: PropTypes.func.isRequired,
};

export default ProductDetails;
