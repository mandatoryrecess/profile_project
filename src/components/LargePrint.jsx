import React from "react";
import "./Portfolio.css";
import "./Info.css";
import SvgCircleArrowRight from "./SvgCircleArrowRight";
import { Link, withRouter } from "react-router-dom";


function LargePrint() {
  return (
    <div>
        <div class="box floating">       
          <div class="text-box-red ">
            <div >
            <h1>LargePrint</h1>
            <img src={"images/bridge_1.jpg"} height="100vw" />
            <img src={"images/bridge2.jpg"} height="100vw"/>
            <img src={"images/bus2013.jpg"} height="100vw"/>
            <img src={"images/bus2016.jpg"} height="100vw"/>
            <img src={"images/bus2019.jpg"} height="100vw"/>
            <img src={"images/bus2016_2.jpg"} height="100vw"/>      
            </div>
          </div>
      </div>
        <Link class="" to="/portfolio">
          <SvgCircleArrowRight class="arrow"/>
        </Link>
    </div>
  );
}

export default LargePrint;