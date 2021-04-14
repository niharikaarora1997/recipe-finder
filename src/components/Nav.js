import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => (
  <h4 className="text-center">
    <Link to="/">Home</Link>{" | "}
    <Link to="/favorites">Favorites</Link>
  </h4>
);

export default Nav;
