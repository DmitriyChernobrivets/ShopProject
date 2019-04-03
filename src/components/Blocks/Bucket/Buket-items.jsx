import React, { Component } from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { increment, decrement, deleteItem } from "../../../store/Actions/bucket";
import Svg from "../../Shared/Svg/svg";
import { options } from "../../Shared/Svg/options";
import PropTypes from "prop-types";
class BuketItems extends Component {
  state = {
    count: 1
  };
  componentDidMount() {
    this.setState({
      price: +this.props.item.price
    });
  }

  increment = () => {
    const { increment } = this.props;
    const { price } = this.props.item;
    this.setState(
      prevState => ({
        count: prevState.count + 1
      }),
      () => increment(price)
    );
  };
  decrement = () => {
    const { decrement } = this.props;
    const { count } = this.state;
    const { price } = this.props.item;
    this.setState(
      prevState => ({
        count: prevState.count === 1 ? prevState.count : prevState.count - 1
      }),
      () => (count !== 1 ? decrement(price) : null)
    );
  };
  deleteCard = () => {
    const { _id } = this.props.item;
    const { price, count } = this.state;
    this.props.deleteItem({ id: _id, price: price * count });
  };
  render() {
    const { item } = this.props;
    const { count, price } = this.state;
    const total = price * count;

    return (
      <div className="bucket_product-container">
        <div className="bucket_product-info">
          <div className="bucket_image-container">
            <img src={item.images[0]} alt={item.title} />
          </div>
          <div className="bucket_content">
            <p>{item.title}</p>
          </div>
        </div>
        <div className="bucket_product-price">
          <div className="bucket_increments">
            <button onClick={this.decrement}>-</button>
            <div>{count}</div>
            <button onClick={this.increment}>+</button>
          </div>
          <div className="bucket_price">{total} UAH</div>
        </div>
        <button className="bucket_close" onClick={this.deleteCard}>
          <Svg path={options.CLOSE} viewbox="0 0 67 67" />
        </button>
      </div>
    );
  }
}
BuketItems.propTypes = {
  item: PropTypes.object.isRequired,
  decrement: PropTypes.func.isRequired
};

const setDispatchToProps = dispatch => {
  return {
    increment: value => dispatch(increment(value)),
    decrement: value => dispatch(decrement(value)),
    deleteItem: value => dispatch(deleteItem(value))
  };
};

export default connect(
  null,
  setDispatchToProps
)(BuketItems);
