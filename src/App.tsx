import React from "react";
import CustomerList from "./CustomerList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

const App = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      {/* <CustomerList /> */}
      <ShoppingCart/>
    </div>
  );
};

export default App;
