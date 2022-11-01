import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

import ShoppingCart from '../../ShoppingCart';
import Category from '../categories/Category';
import Products from './Products';

function ProductsPage() {
  const params = useParams();
  console.log(params);

  const id = params.id ? params.id : '';

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
            <Products id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductsPage;
