import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({
        product: data,
      }));
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, attributes } = product;
    return (
      <section>
        <p data-testid="product-detail-name">{title}</p>
        <p>
          `R$ $
          { price }
          `
        </p>
        <img src={ thumbnail } alt="product-name" />
        <section>
          <p>Especificações Técnicas</p>
          {attributes && attributes.map((atributos) => (
            <div key={ atributos.id }>
              <span>
                {`${atributos.name}:${atributos.value_name}`}
              </span>
            </div>
          ))}
        </section>
      </section>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductDetails;
