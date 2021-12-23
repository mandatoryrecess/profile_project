import React from "react";
import "./Portfolio.css";
import "./Info.css";
import SvgCircleArrowRight from "./SvgCircleArrowRight";
import { Link, withRouter } from "react-router-dom";



function Digital() {
  return (
   <div>
      <div class="box floating"> 
        <div class="text-box-red">
          <div>
            <h1>Digital</h1>
          </div>
      </div>
      </div>
        <Link class="" to="/portfolio">
            <SvgCircleArrowRight class="arrow"/>
      </Link>
    </div> 
  );
}

export default Digital;