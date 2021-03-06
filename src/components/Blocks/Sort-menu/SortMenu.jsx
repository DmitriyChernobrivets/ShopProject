import React, { PureComponent } from "react";
import Select from "react-select";
import { options } from "../../../constants/select-options";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

class SortMenu extends PureComponent {
  state = {
    selectedOption: null
  };

  onSortChange = selectedOption => {
    const { getProducts, currentFilters } = this.props;

    this.setState({ selectedOption }, () =>
      getProducts({ ...currentFilters, sort: selectedOption.value })
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
            onChange={this.onSortChange}
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
  getProducts: PropTypes.func.isRequired
};

export default SortMenu;
