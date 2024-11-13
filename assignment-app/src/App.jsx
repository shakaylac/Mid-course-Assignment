import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand ms-4 nav-link" to="/">
          User Behavior Data
        </Link>
      </nav>
      <hr />
    </div>
  );
}

export default App;
