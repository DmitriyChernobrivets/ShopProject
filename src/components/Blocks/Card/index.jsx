import React, { Component } from "react";
import ForSale from "../../Shared/forSale/forSale";
import Details from "../../Shared/Details/Details";
import ImageContainer from "./ImageContainer";
import Title from "./Title";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBucket } from "../../../store/Actions/bucket";
import Button from "../../Shared/Button/Button";
import PropTypes from "prop-types";

// import "./styles.scss";
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
    const { _id, description, forSale } = this.props.product;
    const { bucketItems, product, addToBucket, history, match } = this.props;

    const { categories } = this.props.match.params;
    const link = categories + "/" + _id;

    return (
      <Col className="product-card" xs={6} sm={6} lg={4}>
        <ImageContainer product={product} match={match} link={link} />

        <Title product={product} link={link} />
        <ForSale forSale={forSale} />
        <Button
          product={product}
          bucketItems={bucketItems}
          addToBucket={addToBucket}
          history={history}
        />

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
