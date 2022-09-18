import React from 'react'; /* 
import { Route } from 'react-router';
import {  BrowserRouter } from 'react-router-dom'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CustomerList from './CustomerList';
import Login from './Login';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
