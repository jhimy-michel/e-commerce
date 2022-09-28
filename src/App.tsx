import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/products/ProductsPage';

import CustomerList from './CustomerList';
import Login from './Login';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <div className="container-fluid"> */}
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
