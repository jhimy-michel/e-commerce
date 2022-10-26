import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ShoppingCart from '../../ShoppingCart';
import Category from '../categories/Category';

function ProductsPage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h4>Products</h4>
          </Col>
        </Row>
        <Row>
          <Col xs="2">
            <Category />
          </Col>
          <Col xs="8">
            List of products
            <ShoppingCart />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
