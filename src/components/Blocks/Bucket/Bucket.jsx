import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import BucketItems from "./Buket-items";
import { connect } from "react-redux";
import { updateBucket } from "../../../store/Actions/bucket";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import "./styles.scss";

class Bucket extends Component {
  componentWillUnmount() {
    this.props.updateBucket();
  }
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const { total, items } = this.props;

    return (
      <Container className="bucket">
        <h1>Bucket</h1>
        <Row>
          <Col lg={12}>
            <TransitionGroup>
              {items.map(item => (
                <CSSTransition key={item._id} timeout={500} classNames="item">
                  <BucketItems item={item} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Col>
          <Col>
            <div className="total_price">
              Total price: <span>{total} UAH</span>
            </div>
            <button className="bucket_buy-btn">BUY</button>
            <button className="bucket_return-link" onClick={this.goBack}>
              Go back
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

Bucket.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired
};

const stateToProps = state => {
  return {
    total: state.bucket.total,
    items: state.bucket.items
  };
};
const dispatchToProps = dispatch => {
  return {
    updateBucket: () => dispatch(updateBucket())
  };
};
export default connect(
  stateToProps,
  dispatchToProps
)(Bucket);
