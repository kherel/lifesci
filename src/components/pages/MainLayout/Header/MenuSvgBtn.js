import React from 'react';
//import * as T from "prop-types";

const MenuSvgBtn = ({open, color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    {
      open ?
        <polyline id="Shape" fill='white' points="23.8382022 21.68 13.8067416 11.76 23.811236 1.86666667 21.9235955 0 11.9191011 9.89333333 1.91460674 0 0.0269662921 1.86666667 10.0314607 11.76 0 21.68 1.91460674 23.5466667 11.9191011 13.6266667 21.9505618 23.5466667" />
        : <g transform="translate(0, 3)">
            <path fill={color} d="M0,0 L24,0 L24,3 L0,3 L0,0 Z M0,7 L24,7 L24,10 L0,10 L0,7 Z M0,14 L24,14 L24,17 L0,17 L0,14 Z" />
          </g>
    }
  </svg>

)

MenuSvgBtn.propTypes = {};

MenuSvgBtn.defaultProps = {
  color: '#333'
}

export default MenuSvgBtn