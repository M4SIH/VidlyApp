import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              style={{ fontWeight: "bold" }}
              className="nav-link"
              to="/movies"
            >
              Vidly
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rental">
              Rental
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
