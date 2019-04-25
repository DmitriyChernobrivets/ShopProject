import React, { PureComponent } from "react";
import Select from "react-select";
import { options } from "../../../constants/select-options";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

class SortMenu extends PureComponent {
  state = {
    selectedOption: null
  };

  onChange = selectedOption => {
    const { getfilteredProducts, currentFilters } = this.props;

    this.setState({ selectedOption }, () =>
      getfilteredProducts({ ...currentFilters, sort: selectedOption.value })
    );
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <Col>
        <div className="sort-menu">
          <h5>Sort by price: </h5>
          <Select
            className="price-select"
            onChange={this.onChange}
            placeholder="Select..."
            options={options}
            value={selectedOption}
          />
        </div>
      </Col>
    );
  }
}

SortMenu.propTypes = {
  currentFilters: PropTypes.object.isRequired,
  getfilteredProducts: PropTypes.func.isRequired
};

export default SortMenu;
