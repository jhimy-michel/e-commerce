import React from "react";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

const App = (): JSX.Element => {
  return (
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
};

export default App;
