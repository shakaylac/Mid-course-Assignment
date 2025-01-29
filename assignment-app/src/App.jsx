import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes,NavLink } from "react-router-dom";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
