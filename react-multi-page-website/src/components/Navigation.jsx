import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";
import "./Info.css";

function Navigation(props) {
  return (
    <div class="navbarcontainer box a">
      <nav>
        <div class="container">
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  HI
                  <span class="sr-only">*</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li
              class={`nav-item  ${
                props.location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/portfolio">
                PORTFOLIO
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