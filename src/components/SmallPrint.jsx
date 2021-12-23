import React from "react";
import "./Portfolio.css";
import "./Info.css";
import SvgCircleArrowRight from "./SvgCircleArrowRight";
import "./Arrow.css";


function SmallPrint() {
  return (
    <div>
    <div class="box floating">
    
    <div class="text-box-red ">
      <div >
     
      <h1>SmallPrint</h1>
      <a href ="https://issuu.com/circlecraft/docs/program">2019 </a> 
      <a href="https://issuu.com/circlecraft/docs/program_2018_final">2018 </a>
      <a href="https://issuu.com/circlecraft/docs/circle_craft_2017_showguide">2017 </a>
      <a href="https://issuu.com/circlecraft/docs/programdraft_13_issuu">2016 </a>
      <a href ="https://issuu.com/rclamp/docs/draftofprogram_v12">2015 </a>
      <a href="https://issuu.com/circlecraft/docs/circlecraft2014">2014 </a>
      <a href="https://issuu.com/circlecraft/docs/program_online">2013</a>
      </div>
    </div>
    
  </div>
  <SvgCircleArrowRight class="arrow"/>
  </div>

  );
}

export default SmallPrint;