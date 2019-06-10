import React, { Component } from "react";
import Checkbox from "../../Shared/checkbox/Checkbox";
import { isFiltersEmpty } from "../../../helpers/functions";
import defaultOptions from "../../../constants/filters";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import DefaultButton from "../../Shared/Button/defaultButton";
import "react-input-range/lib/css/index.css";

class Filter extends Component {
  state = defaultOptions[this.props.match.params.categories];

  componentWillUpdate(nextProps, nextState) {
    const category = nextProps.location.pathname.match(/(Mobile|Notebooks|PCs)/);
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState(defaultOptions[category[0]]);
      return true;
    } else return false;
  }
  resetFilters = () => {
    const isStateDefault = isFiltersEmpty(this.state);
    const { sort, getProducts, match } = this.props;

    if (isStateDefault) return;

    this.setState(defaultOptions[match.params.categories], () => {
      getProducts({ ...this.state, sort });
    });
  };

  onChangeAction(idx, key) {
    const { sort, getProducts } = this.props;

    this.setState(
      prevState => {
        const newData = prevState[key].map((el, index) =>
          index === idx ? { ...el, checked: !el.checked } : el
        );
        return {
          [key]: [...newData]
        };
      },
      () => getProducts({ ...this.state, sort })
    );
  }
  onRangeChange = price =>
    this.setState({ ...this.state, price }, () => this.props.getProducts(this.state));

  render() {
    return (
      <div className="filter_container">
        <h3>Filters</h3>
        {Object.keys(this.state).map(el => (
          <div className="filter_box" key={el}>
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
                  key={item.title}
                  onChangeAction={this.onChangeAction.bind(this, idx, el)}
                />
              ))
            )}
          </div>
        ))}
        <DefaultButton title="reset filters" callback={this.resetFilters} />
      </div>
    );
  }
}

Filter.propTypes = {
  sort: PropTypes.string.isRequired,
  getProducts: PropTypes.func.isRequired
};

export default Filter;
