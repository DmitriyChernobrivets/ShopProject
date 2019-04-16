import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class Button extends Component {
  state = {
    isAddedtoBucket: false
  };
  componentDidMount() {
    const { bucketItems, product } = this.props;
    const isiteminBucket = bucketItems.find(item => item._id === product._id);
    if (isiteminBucket) {
      this.setState({ isAddedtoBucket: true });
    }
  }
  handleBucketAdd = () => {
    const { isAddedtoBucket } = this.state;
    const { product, addToBucket, history } = this.props;
    if (isAddedtoBucket) {
      history.push("/bucket");
    }
    this.setState({ isAddedtoBucket: true });
    addToBucket(product);
  };
  render() {
    const { isAddedtoBucket } = this.state;
    const { product } = this.props;
    const addedBtnStyle = !isAddedtoBucket
      ? "btn product-card-button"
      : "btn product-card-button added";
    return (
      <button className={addedBtnStyle} onClick={this.handleBucketAdd}>
        {!isAddedtoBucket ? <span>{product.price} UAH</span> : <span>In bucket</span>}
      </button>
    );
  }
}
Button.propTypes = {
  product: PropTypes.object.isRequired,
  addToBucket: PropTypes.func.isRequired
};
export default Button;
