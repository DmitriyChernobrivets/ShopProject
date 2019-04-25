import React, { PureComponent } from "react";
import { Col, Row, Container } from "react-bootstrap";
import BucketItems from "./Items";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BottomNav from "./BottomNav";
import PropTypes from "prop-types";

class Bucket extends PureComponent {
  componentWillUnmount() {
    this.props.updateBucket();
  }
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const { total, items, increment, decrement, deleteItem } = this.props;

    return (
      <main>
        <Container className="bucket">
          <h1>Bucket</h1>
          <Row>
            <Col lg={12}>
              <TransitionGroup>
                {items.length !== 0 ? (
                  items.map(item => (
                    <CSSTransition key={item._id} timeout={500} classNames="item">
                      <BucketItems
                        item={item}
                        increment={increment}
                        decrement={decrement}
                        deleteItem={deleteItem}
                      />
                    </CSSTransition>
                  ))
                ) : (
                  <h3 className="empty-text">Bucket is Empty :((</h3>
                )}
              </TransitionGroup>
            </Col>
            <Col>
              <BottomNav total={total} click={this.goBack} />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

Bucket.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.number.isRequired
};

export default Bucket;
