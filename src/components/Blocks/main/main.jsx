import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilteredProducts } from "../../../store/Actions/getProducts";
import Card from "../Card/Card";
import { Col, Row, Container } from "react-bootstrap";
import Filter from "../Filter/Filter";
import SortMenu from "../Sort-menu/SortMenu";
import ReactPaginate from "react-paginate";
import { Circle2 } from "react-preloaders";
import PropTypes from "prop-types";
import "./styles.scss";
class Main extends Component {
  componentDidMount() {
    const { currentFilters, history, getfilteredProducts } = this.props;
    this.unlisten = history.listen(this.onRouteChange);
    getfilteredProducts(currentFilters);
  }
  onRouteChange = location => {
    const { currentFilters, getfilteredProducts } = this.props;
    const category = location.pathname.match(/(Mobile|Notebooks|PCs)/);
    if (category) {
      getfilteredProducts(currentFilters);
    }
  };
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const {
      allproducts,
      match,
      totalPageCount,
      currentFilters,
      getfilteredProducts,
      bucketItems,
      history
    } = this.props;
    const { products, preloader } = allproducts;
    const paginationCount = Math.ceil(totalPageCount / 6);

    return (
      <main>
        <Container className="wrapper">
          <Row>
            <Col lg={3}>
              <Filter match={match} history={history} />
            </Col>
            <Col lg={9}>
              <SortMenu />
              <Row>
                {preloader && <Circle2 color={"red"} bgColor={"rgba(3, 3, 3, 0.2)"} time={1400} />}

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
              <ReactPaginate
                containerClassName="pagination"
                activeClassName="pagination_active"
                activeLinkClassName="pagination_active-link"
                pageCount={paginationCount}
                onPageChange={({ selected }) => {
                  const obj = { ...currentFilters, currentPage: selected };

                  getfilteredProducts(obj);
                }}
              />
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
    getfilteredProducts: val => dispatch(getFilteredProducts(val))
  };
};

export default connect(
  mapStateToProps,
  mapDeispathToProps
)(Main);
