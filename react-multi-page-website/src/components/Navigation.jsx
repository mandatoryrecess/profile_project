import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div class="navbarcontainer">
      <nav>
        <div class="container">
          <Link  to="/">
            Rossanne Clamp
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
              class={`nav-item  ${
                props.location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);