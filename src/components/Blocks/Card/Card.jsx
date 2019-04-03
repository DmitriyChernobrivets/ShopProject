import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import ForSale from "../../Shared/forSale/forSale";
import RatingStars from "../../Shared/Stars/RatingStars";
import Details from "../../Shared/Details/Details";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBucket } from "../../../store/Actions/bucket";
import PropTypes from "prop-types";
class Card extends Component {
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
    const { _id, description, title, forSale, images, price, hot, rating } = this.props.product;
    const { isAddedtoBucket } = this.state;
    const { categories } = this.props.match.params;
    const link = categories + "/" + _id;
    const addedBtnStyle = !isAddedtoBucket
      ? "btn product-card-button"
      : "btn product-card-button added";

    return (
      <Col className="product-card" xs={12} sm={6} lg={4}>
        {hot && (
          <div className="hot-price">
            <span>HOT</span>
          </div>
        )}
        <div className="prdouct-image">
          <Link to={link}>
            <img src={images[0]} alt="img" />
          </Link>
        </div>
        <Link to={link} className="product-card-title">
          <span>{title}</span>
        </Link>

        <RatingStars rating={rating} />
        <ForSale forSale={forSale} />

        <button className={addedBtnStyle} onClick={this.handleBucketAdd}>
          {!isAddedtoBucket ? <span>{price} UAH</span> : <span>In bucket</span>}
        </button>

        <Details description={description} />
      </Col>
    );
  }
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
  bucketItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToBucket: PropTypes.func.isRequired
};

const dispatchToPRops = dispatch => {
  return {
    addToBucket: value => dispatch(addToBucket(value))
  };
};
export default connect(
  null,
  dispatchToPRops
)(Card);
