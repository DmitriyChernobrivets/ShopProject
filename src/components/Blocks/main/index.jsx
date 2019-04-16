import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFilteredProducts,
  getProductBySearchInput,
  resetFilters,
  resetStore
} from "../../../store/Actions/getProducts";
import { options } from "../../Shared/Svg/options";
import Card from "../Card/index";
import { Col, Row, Container } from "react-bootstrap";
import Filter from "../Filter/Filter";
import ErrorComponent from "../../Shared/Errorpage/ErrorComponent";
import SortMenu from "../Sort-menu/SortMenu";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import Media from "react-media";
import SearchInput from "../../Shared/searchInput/searchInput";
import Modal from "../../Shared/Modal/Modal";
import DefaultButton from "../../Shared/Button/defaultButton";
import "./styles.scss";

const { SEARCH } = options;
class Main extends Component {
  state = {
    isFiltersOpen: false
  };
  componentDidMount() {
    const { currentFilters, getfilteredProducts, resetStore } = this.props;
    resetStore();
    getfilteredProducts(currentFilters);
  }

  componentWillUpdate(nextProps, nextState) {
    const { getfilteredProducts } = this.props;
    if (nextProps.location.pathname !== this.props.location.pathname) {
      getfilteredProducts();
      return true;
    } else {
      return false;
    }
  }
  componentWillUnmount() {
    const { resetFilters } = this.props;
    resetFilters();
  }
  onPageChange = ({ selected }) => {
    const { currentFilters, getfilteredProducts } = this.props;
    const obj = { ...currentFilters, currentPage: selected };

    getfilteredProducts(obj);
  };

  openModal = () => {
    this.setState({
      isFiltersOpen: true
    });
  };
  closeModal = e => {
    console.log(e.target.className);
    if (e.target.className.includes("signin-modal")) {
      this.setState({
        isFiltersOpen: false
      });
    }
  };
  render() {
    const {
      allproducts,
      match,
      totalPageCount,
      currentFilters,
      bucketItems,
      location,
      history,
      getProductBySearchInput
    } = this.props;
    const { isFiltersOpen } = this.state;
    const { products } = allproducts;
    const paginationCount = Math.ceil(totalPageCount / 6);
    const { error } = allproducts;
    return (
      <main>
        <Container className="wrapper">
          {isFiltersOpen && (
            <Modal closeModal={this.closeModal}>
              <Row>
                <Col sm={{ offset: 2, span: 8 }} xs={{ offset: 2, span: 6 }}>
                  <Filter match={match} location={location} />
                </Col>
              </Row>
            </Modal>
          )}
          <Row>
            <Col>
              <Media query="(max-width: 768px)">
                {matches =>
                  matches ? (
                    <DefaultButton title="Filters" callback={this.openModal} />
                  ) : (
                    <Filter match={match} location={location} />
                  )
                }
              </Media>
            </Col>
            <Col md={9}>
              <Row className="sort-wrapper">
                <SortMenu />

                <SearchInput
                  path={SEARCH}
                  getProductBySearchInput={getProductBySearchInput}
                  sort={currentFilters.sort}
                />
              </Row>
              <Row>
                {error && <ErrorComponent title={error} />}
                {products.map(prod => (
                  <Card
                    product={prod}
                    match={match}
                    history={history}
                    key={prod._id}
                    bucketItems={bucketItems}
                  />
                ))}
              </Row>
              {products.length !== 0 && (
                <ReactPaginate
                  containerClassName="pagination"
                  activeClassName="pagination_active"
                  activeLinkClassName="pagination_active-link"
                  pageCount={paginationCount}
                  onPageChange={this.onPageChange}
                />
              )}
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

Main.propTypes = {
  bucketItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPageCount: PropTypes.number.isRequired,
  allproducts: PropTypes.object.isRequired,
  currentFilters: PropTypes.object.isRequired,
  getfilteredProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    totalPageCount: state.currentFilters.totalPageCount,
    allproducts: state.allProducts,
    currentFilters: state.currentFilters,
    bucketItems: state.bucket.items
  };
};

const mapDeispathToProps = dispatch => {
  return {
    getfilteredProducts: val => dispatch(getFilteredProducts(val)),
    getProductBySearchInput: val => dispatch(getProductBySearchInput(val)),
    resetFilters: () => dispatch(resetFilters()),
    resetStore: () => dispatch(resetStore())
  };
};

export default connect(
  mapStateToProps,
  mapDeispathToProps
)(Main);
