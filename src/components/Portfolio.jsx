import React from "react";
import "./Portfolio.css";
import "./Info.css";
import { Link, withRouter } from "react-router-dom";

function Portfolio() {
  return (
  <div>
    <div>
      <div class="box-portfolio floating-slow">
        <div class="portfolio-nav-cream">
          <Link to="/digital">
            <h1 class="portfolio-nav-text-box floating-fast">Digital</h1> 
          </Link>
        </div>
          <div class="portfolio-nav-cream">
            <Link to="/largeprint">
              <h1 class="portfolio-nav-text-box floating-fast" >Large Print</h1> 
            </Link>
          </div>
   
      <div class="portfolio-nav-cream">
            <Link  to="/smallprint">
              <h1 class="portfolio-nav-text-box floating ">Small Print</h1> 
            </Link>
      </div>
     </div>
    </div>
  </div>

  );
}

export default Portfolio;