import React from "react";

const IconCheck = ({onClick, background}) => (
  <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        onClick={onClick}
        className={`h-6 w-6 rounded-full ${background} cursor-pointer`}
        viewBox="-4 -5 18 18"
        >
            
    <path 
        fill="none" 
        stroke="#FFF" 
        stroke-width="2" 
        d="M1 4.304L3.696 7l6-6" 
    />
  </svg>
);

export default IconCheck;
