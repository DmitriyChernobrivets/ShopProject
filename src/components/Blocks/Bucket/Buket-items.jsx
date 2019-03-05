import React, { Component } from "react";
import "./bucket.scss";
import { connect } from "react-redux";
import {
  incrementtotalprice,
  decrementtotalprice,
  deleteItem
} from "../../../store/Actions/bucket";
import Svg from "../../Shared/Svg/svg";
import { options } from "../../Shared/Svg/options";

class BuketItems extends Component {
  state = {
    value: 1
  };
  componentDidMount() {
    const { incrementtotalprice } = this.props;
    this.setState(
      {
        price: +this.props.item.price
      },
      () => incrementtotalprice(this.state.price)
    );
  }

  increment = () => {
    const { incrementtotalprice } = this.props;
    this.setState(
      prevState => ({
        value: prevState.value + 1
      }),
      () => incrementtotalprice(this.state.price)
    );
  };
  decrement = () => {
    const { decrementtotalprice } = this.props;
    const { value } = this.state;
    this.setState(
      prevState => ({
        value: prevState.value === 1 ? prevState.value : prevState.value - 1
      }),
      () => (value !== 1 ? decrementtotalprice(this.state.price) : null)
    );
  };
  deleteCard = () => {
    const { _id } = this.props.item;
    const { price, value } = this.state;
    this.props.deleteItem({ id: _id, price: price * value });
  };
  render() {
    const { item } = this.props;
    const { value, price } = this.state;
    const total = price * value;

    return (
      <div className="bucket_product-container">
        <div className="bucket_product-info">
          <div className="bucket_image-container">
            <img src={item.images[0]} alt="image" />
          </div>
          <div className="bucket_content">
            <p>{item.title}</p>
          </div>
        </div>
        <div className="bucket_product-price">
          <div className="bucket_increments">
            <button onClick={this.decrement}>-</button>
            <div>{value}</div>
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

const setDispatchToProps = dispatch => {
  return {
    incrementtotalprice: value => dispatch(incrementtotalprice(value)),
    decrementtotalprice: value => dispatch(decrementtotalprice(value)),
    deleteItem: value => dispatch(deleteItem(value))
  };
};

export default connect(
  null,
  setDispatchToProps
)(BuketItems);
