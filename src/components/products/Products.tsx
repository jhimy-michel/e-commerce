import React from 'react';
import { Container, Row, Spinner } from 'reactstrap';
import { Products } from '../../api/endpoints/ecommerceApi.schemas';
import { useProductsControllerFind } from '../../api/endpoints/products-controller';
import Product from './Product';

const ProductList = ({ id }: { id: string }) => {
  const { data, isLoading } = useProductsControllerFind({ filter: { where: { categoryId: id } } });
  if (isLoading) {
    return <Spinner />;
  }
  console.log(data);
  const prod = data as Products[];
  return (
    <Container>
      <Row xs="4">
        {prod.map((pr) => {
          return <Product key={pr._id} product={pr} />;
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
