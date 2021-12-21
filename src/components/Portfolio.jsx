import React from "react";
import "./Portfolio.css";
import "./Info.css";
import LightBox from "./LightBox";

function Portfolio() {
  return (
    <div>
    <div class="box-portfolio floating">
      <div class="text-box-red ">
        <h1>Small Print******* <br />
        <a href ="https://issuu.com/circlecraft/docs/program">2019 </a> 
        <a href="https://issuu.com/circlecraft/docs/program_2018_final">2018 </a>
        <a href="https://issuu.com/circlecraft/docs/circle_craft_2017_showguide">2017 </a>
        <a href="https://issuu.com/circlecraft/docs/programdraft_13_issuu">2016 </a>
        <a href ="https://issuu.com/rclamp/docs/draftofprogram_v12">2015 </a>
        <a href="https://issuu.com/circlecraft/docs/circlecraft2014">2014 </a>
        <a href="https://issuu.com/circlecraft/docs/program_online">2013</a></h1>  
      </div>

      <div class=" text-box-red ">
      <h1>Large Print</h1>   
      <img src={"images/bridge_1.jpg"} height="100vw" />
      <img src={"images/bridge2.jpg"} height="100vw"/>
      <img src={"images/bus2013.jpg"} height="100vw"/>
      <img src={"images/bus2016.jpg"} height="100vw"/>
      <img src={"images/bus2019.jpg"} height="100vw"/>
      <img src={"images/bus2016_2.jpg"} height="100vw"/>
      
    </div>

    <div class="text-box-red ">
    <h1>Digital</h1>   
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
  </div>

    </div>
  </div>

  );
}

export default Portfolio;