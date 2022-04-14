import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
function Navigation() {
  return (
    <div className="navigation ">
      <nav className="navbar navbar-expand  ">
        <div className="container">

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Players">
                  Players
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Staff">
                  Staff
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navigation;
