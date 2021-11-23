import React from "react";
import "./Home.css";
import "./Info.css";
import Heyhi from '../images/heyhi.png'


function Home() {
  return (
    <div >
      <div class="heyhi box d">
        <div>
          <img src={Heyhi} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Home;