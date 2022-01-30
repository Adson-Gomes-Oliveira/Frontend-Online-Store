import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Products.css';

const PRODUCTS_KEY = 'productsAdded';
class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      existProduct: false,
      productId: '',
      productTitle: '',
      productThumb: '',
      productPrice: 0,
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
      price: productPrice,
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
    const { id, title, thumbnail, price } = this.props;

    this.setState({
      productId: id,
      productTitle: title,
      productThumb: thumbnail,
      productPrice: price,
    });
  }

  render() {
    const { id, title, thumbnail, price, attributes } = this.props;
    const spanPrice = (<span> à vista</span>);
    const priceFormated = price.toFixed(2).replace('.', ',');
    const percent = 0.15;
    const parcelBuy = 10;
    let priceCredit = (price * percent) + price;
    priceCredit = priceCredit.toFixed(2).replace('.', ',');
    let priceCreditParcel = ((price * percent) + price) / parcelBuy;
    priceCreditParcel = priceCreditParcel.toFixed(2).replace('.', ',');
    return (
      <div data-testid="product" key={ id }>
        <div className="card">
          <Link
            to={ {
              pathname: `/productDetail/${id}`,
              productInfo: {
                idProduct: id,
                titleProduct: title,
                thumbProduct: thumbnail,
                priceProduct: price,
                attrProduct: attributes,
              },
            } }
            style={ { textDecoration: 'none', color: 'black' } }
            data-testid="product-detail-link"
          >
            <img className="card-img" src={ thumbnail } alt="" />
            <div>
              <span className="card-title">{ title }</span>
              <span className="card-price">
                {`R$ ${priceFormated}`}
                {spanPrice}
              </span>
              <span className="card-price-credit">
                {`ou R$ ${priceCredit}`}
              </span>
              <span className="card-price-credit">
                {`10x de R$ ${priceCreditParcel} sem juros`}
              </span>
            </div>
          </Link>
          <button
            id={ id }
            type="button"
            data-testid="product-add-to-cart"
            className="card-button"
            onClick={ this.handleClickAddToCart }
          >
            + Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  attributes: PropTypes.shape.isRequired,
};

export default Products;
