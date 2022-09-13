import React, { useState } from 'react';

interface Products {
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
    <div>
      <h4>Shopping Cart</h4>
      <div></div>
    </div>
  );
};

export default ShoppingCart;
