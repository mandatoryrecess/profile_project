import React from "react";
import "./Portfolio.css";
import "./Info.css";
import largePrint from './LargePrint';
import SmallPrint from './SmallPrint';
import Digital from './Digital';
import { Link, withRouter } from "react-router-dom";

function Portfolio(props) {
  return (
  <div>
    <div>
      <div class="box-portfolio floating-slow">
          <div class="floating-fast text-box-red ">
            <Link  class=" " to="/largeprint">
              <h1>Small Print</h1> 
            </Link>
          </div>
   
      <div class="floating text-box-red ">
            <Link  class=" " to="/smallprint">
              <h1>Large Print</h1> 
            </Link>
      </div>
      <div class="floating-fast text-box-red ">
            <Link  class=" " to="/digital">
              <h1>Digital</h1> 
            </Link>
      </div>
     </div>
    </div>
  </div>

  );
}

export default Portfolio;