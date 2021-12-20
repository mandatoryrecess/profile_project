import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";


function Navigation(props) {
  return (
   
<div class="nav-container">
    <nav>
      <input type="checkbox" id="nav-toggle"/>
      <label for="nav-toggle" class="burger-menu">
        <img src="images/media/menu.png" width='40px' alt=""/>
      </label>
      <div class="left-menu">
          <Link class={`nav-item  ${
            props.location.pathname === "/" ? "active" : ""
            }`} class="nav-link" to="/"> 
            Hey 
          </Link>

          <Link class={`nav-item  ${
               props.location.pathname === "/about" ? "active" : ""
               }`} class="nav-link" to="/about">
            About
          </Link>
          <Link class={`nav-item  ${
            props.location.pathname === "/contact" ? "active" : ""
           }`} class="nav-link" to="/contact">
           Contact
          </Link>
          <Link class={`nav-item  ${
             props.location.pathname === "/portfolio" ? "active" : ""
             }`} class="nav-link" to="/portfolio">
            Portfolio
          </Link>
      </div>
      <a href="#" class="logo">Hey Hi</a>
    </nav>
</div>


  );
}

export default withRouter(Navigation);

