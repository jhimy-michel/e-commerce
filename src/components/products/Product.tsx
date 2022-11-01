import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap';
import { Products } from '../../api/endpoints/ecommerceApi.schemas';

const Product = ({ product }: { product: Products }) => {
  return (
    <Col>
      <Card>
        <CardHeader>{product.name}</CardHeader>
        <CardBody>{product.description}</CardBody>
        <CardFooter>{product.amountAvailableInStock}</CardFooter>
      </Card>
    </Col>
  );
};

export default Product;
