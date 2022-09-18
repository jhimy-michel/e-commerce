import React from 'react';
import CustomerList from './CustomerList';
import Login from './Login';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const App = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      {/* <CustomerList /> */}
      {/* <ShoppingCart/> */}
      <Login />
    </div>
  );
};

export default App;
