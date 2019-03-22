import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilteredProducts } from "../../../store/Actions/getProducts";
import Card from "../Card/Card";
import "./main.scss";
import { Col, Row, Container } from "react-bootstrap";
import Filter from "../Filter/Filter";
import SortMenu from "../Sort-menu/SortMenu";
import ReactPaginate from "react-paginate";

class Main extends Component {
  componentDidMount() {
    const { currentFilters } = this.props;

    this.props.getfilteredProducts(currentFilters);
  }
  render() {
    const { products, match, totalPageCount, currentFilters, getfilteredProducts } = this.props;

    const paginationCount = Math.ceil(totalPageCount / 6);

    return (
      <main>
        <Container className="wrapper">
          <Row>
            <Col lg={3}>
              <Filter />
            </Col>
            <Col lg={9}>
              <SortMenu />
              <Row>
                {products.map(prod => (
                  <Card product={prod} match={match} key={prod._id} />
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

const mapStateToProps = state => {
  return {
    totalPageCount: state.currentFilters.totalPageCount,
    products: state.allProducts.products,
    currentFilters: state.currentFilters
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
