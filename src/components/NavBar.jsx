import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/cabins">Cabins</Link>
        </div>
      </div>
      <div>
        <div>
          <a href="external1">External1</a>
        </div>
        <div>
          <a href="external2">External2</a>
        </div>
        <div>
          <a href="external3">External3</a>
        </div>
      </div>
    </nav>
  );
};
