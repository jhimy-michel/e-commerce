import React, { useState } from 'react';
import Product from './Product';

export interface Products {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}
interface ShoppingState {
  products: Products[];
}
const initialState: ShoppingState = {
  products: [
    { id: 1, productName: 'iPhone', price: 1000, quantity: 3 },
    { id: 2, productName: 'Sony Camera', price: 700, quantity: 3 },
    { id: 3, productName: 'iPad Pro', price: 1200, quantity: 3 },
    { id: 4, productName: 'XBox ', price: 700, quantity: 3 }
  ]
};

const ShoppingCart = (): JSX.Element => {
  const [products, setProducts] = useState<ShoppingState>(initialState);
  return (
    <div className="container-fluid">
      <h4>Shopping Cart</h4>
      <div className="row">
        {products.products.map((prod, index) => {
          return (
            <Product key={index} prod={prod}>
              <button className="btn btn-primary">Buy now</button>
            </Product>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
