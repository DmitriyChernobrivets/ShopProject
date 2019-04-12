import React, { Component } from "react";
import Checkbox from "../../Shared/checkbox/Checkbox";
import defaultOptions from "../../../service/filters";
import { connect } from "react-redux";
import { getFilteredProducts } from "../../../store/Actions/getProducts";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import "./styles.scss";
import "react-input-range/lib/css/index.css";

class Filter extends Component {
  state = {};
  componentWillMount() {
    this.setState(defaultOptions[this.props.match.params.categories]);
  }
  componentWillUpdate(nextProps, nextState) {
    const category = nextProps.location.pathname.match(/(Mobile|Notebooks|PCs)/);
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState(defaultOptions[category[0]]);
      return true;
    } else return false;
  }
  resetFilters = () => {
    const { sort, getFilteredProducts } = this.props;
    this.setState(defaultOptions[this.props.match.params.categories], () =>
      getFilteredProducts({ ...this.state, sort })
    );
  };

  onChangeAction(idx, key) {
    const { sort, getFilteredProducts } = this.props;

    this.setState(
      prevState => {
        const newData = prevState[key].map((el, index) =>
          index === idx ? { ...el, checked: !el.checked } : el
        );
        return {
          [key]: [...newData]
        };
      },
      () => getFilteredProducts({ ...this.state, sort })
    );
  }
  onRangeChange = price =>
    this.setState({ ...this.state, price }, () => this.props.getFilteredProducts(this.state));
  render() {
    return (
      <div className="filter_container">
        {Object.keys(this.state).map((el, idx) => (
          <div className="filter_box" key={idx}>
            <h5>By {el === "memory" ? el + ", Gb" : el}</h5>
            {el === "price" ? (
              <InputRange
                maxValue={150000}
                minValue={0}
                value={this.state.price}
                onChange={this.onRangeChange}
              />
            ) : (
              this.state[el].map((item, idx) => (
                <Checkbox
                  item={item}
                  key={idx}
                  onChangeAction={this.onChangeAction.bind(this, idx, el)}
                />
              ))
            )}
          </div>
        ))}
        <button onClick={this.resetFilters}>reset filters</button>
      </div>
    );
  }
}

Filter.propTypes = {
  sort: PropTypes.string.isRequired,
  getFilteredProducts: PropTypes.func.isRequired
};

const getState = state => {
  return {
    sort: state.currentFilters.sort
  };
};
const getDisptatchToProps = dispatch => {
  return {
    getFilteredProducts: val => dispatch(getFilteredProducts(val))
  };
};
export default connect(
  getState,
  getDisptatchToProps
)(Filter);
