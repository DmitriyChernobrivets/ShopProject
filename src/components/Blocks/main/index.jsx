import React, { Component } from "react";
import { options } from "../../../constants/Svg-options";
import CardContainer from "../../../Containers/CardContainer";
import { Col, Row, Container } from "react-bootstrap";
import FiltersContainer from "../../../Containers/FiltersContainer";
import ErrorComponent from "../../Shared/Errorpage/ErrorComponent";
import SortMenu from "../Sort-menu/SortMenu";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import Media from "react-media";
import SearchInput from "../../Shared/searchInput/searchInput";
import DefaultButton from "../../Shared/Button/defaultButton";
import { Modal } from "react-bootstrap";
import Cardpreloader from "../Card/Cardpreloader";

const { SEARCH } = options;
class Main extends Component {
  state = {
    isshow: false
  };

  handleClose = () => {
    this.setState({ isshow: false });
  };

  handleShow = () => {
    this.setState({ isshow: true });
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
      getProductBySearchInput,
      getProducts,
      onPageChange
    } = this.props;
    const { products } = allproducts;
    const paginationCount = Math.ceil(totalPageCount / 6);
    const { error } = allproducts;

    return (
      <main>
        <Container className="wrapper">
          <Row>
            <Col>
              <Media query="(max-width: 768px)">
                {matches =>
                  matches ? (
                    <DefaultButton title="Filters" callback={this.handleShow} />
                  ) : (
                    <FiltersContainer match={match} location={location} history={history} />
                  )
                }
              </Media>
            </Col>
            <Col md={9}>
              <Row className="sort-wrapper">
                <SortMenu currentFilters={currentFilters} getProducts={getProducts} />

                <SearchInput
                  path={SEARCH}
                  getProductBySearchInput={getProductBySearchInput}
                  sort={currentFilters.sort}
                />
              </Row>
              <Row>
                {error ? (
                  <ErrorComponent title={error} />
                ) : products.length === 0 ? (
                  Array(6)
                    .fill({})
                    .map((el, idx) => <Cardpreloader key={idx} />)
                ) : (
                  products.map(prod => (
                    <CardContainer
                      product={prod}
                      match={match}
                      history={history}
                      key={prod._id}
                      bucketItems={bucketItems}
                    />
                  ))
                )}
              </Row>
              {products.length !== 0 && (
                <ReactPaginate
                  containerClassName="pagination"
                  activeClassName="pagination_active"
                  activeLinkClassName="pagination_active-link"
                  pageCount={paginationCount}
                  onPageChange={onPageChange}
                />
              )}
            </Col>
          </Row>
          <Modal show={this.state.isshow} onHide={this.handleClose}>
            <FiltersContainer match={match} location={location} />
          </Modal>
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
  getProducts: PropTypes.func.isRequired
};

export default Main;
