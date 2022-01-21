import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import { getProductsFromCategoryAndQuery } from '../services/api'; */

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { props } = this.props;
    return (
      <div>{ props }</div>
    );
  }
}

Products.propTypes = {
  props: PropTypes.string.isRequired,
};
