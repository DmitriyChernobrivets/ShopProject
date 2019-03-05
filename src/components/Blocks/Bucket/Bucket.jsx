import React, { Component } from "react";
import "./bucket.scss";
import { Col, Row, Container } from "react-bootstrap";
import BucketItems from "./Buket-items";
import { connect } from "react-redux";
import { getitems } from "../../../store/Actions/bucket";

class Bucket extends Component {
  componentDidMount() {
    this.props.getitems();
  }
  render() {
    const { total, items } = this.props;
    return (
      <Container className="bucket">
        <h1>Bucket</h1>
        <Row>
          {items.map(item => (
            <Col lg={12} key={item._id}>
              <BucketItems item={item} />
            </Col>
          ))}
          <Col>
            <div className="total_price">
              Total price: <span>{total} UAH</span>
            </div>
            <button className="bucket_buy-btn">BUY</button>
            <a href="/" className="bucket_return-link">
              Return
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
const stateToProps = state => {
  return {
    total: state.bucket.total,
    items: state.bucket.items
  };
};
const dispatchToProps = dispatch => {
  return {
    getitems: value => dispatch(getitems(value))
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(Bucket);
