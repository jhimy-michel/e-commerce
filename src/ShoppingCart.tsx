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

  const handleIncrement = (prod: Products) => {
    console.log('Efe: ', prod);
    const allProducts = products.products;
    const index = allProducts.findIndex((prodVal) => prodVal.id === prod.id);
    allProducts[index].quantity += 1;
    setProducts({ products: allProducts });
  };

  const handleDecrement = (prod: Products) => {
    console.log('efe 2:', prod);
    const allProducts = products.products;
    const index = allProducts.findIndex((prodVal) => prodVal.id === prod.id);
    allProducts[index].quantity -= 1;
    setProducts({ products: allProducts });
  };

  return (
    <div className="container-fluid">
      <h4>Shopping Cart</h4>
      <div className="row">
        {products.products.map((prod, index) => {
          return (
            <Product key={index} prod={prod} onIncrement={handleIncrement} onDecrement={handleDecrement}>
              <button className="btn btn-primary">Buy now</button>
            </Product>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
