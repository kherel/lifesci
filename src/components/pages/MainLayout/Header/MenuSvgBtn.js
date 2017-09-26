import React from 'react';
//import * as T from "prop-types";

const MenuSvgBtn = ({color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17">
    <path fill={color} d="M0 0h24v3H0V0zm0 7h24v3H0V7zm0 7h24v3H0v-3z" style={{transition: `all .6s ease`}}/>
  </svg>

)

MenuSvgBtn.propTypes = {};

MenuSvgBtn.defaultProps = {
  color: '#333'
}

export default MenuSvgBtn