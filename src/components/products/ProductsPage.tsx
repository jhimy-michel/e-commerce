import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../Product';
import ShoppingCart from '../../ShoppingCart';

const ProductsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h4>Products</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="2">Categories</Col>
          <Col xs="8">
            List of products
            <ShoppingCart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
