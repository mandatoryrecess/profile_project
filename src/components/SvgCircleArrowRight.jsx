import * as React from "react";

const SvgCircleArrowRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g data-name="Circle Left">
      <circle
        cx={12}
        cy={12}
        r={10}
        style={{
          fill: "#e5e2a8",
        }}
      />
      <path
        d="M17 11H9.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L9.414 13H17a1 1 0 0 0 0-2z"
        style={{
          fill: "#647201",
        }}
      />
    </g>
  </svg>
);

export default SvgCircleArrowRight;

