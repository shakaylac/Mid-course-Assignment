import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
//import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <hr />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
