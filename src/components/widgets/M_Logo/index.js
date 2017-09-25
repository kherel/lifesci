import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Logo')
import {Link} from 'react-router'

const A_Logo = () => (
  <Link className={cn()} to="/">
    <svg width="101" height="33" viewBox="0 0 101 33" version="1.1" xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="xMaxYMin meet">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="logo" transform="translate(1.000000, 1.000000)" strokeWidth="2.314" stroke="#333333">
          <circle id="Oval" cx="15.5" cy="15.5" r="9.5"></circle>
          <circle id="Oval" cx="15.5" cy="15.5" r="15.5"></circle>
        </g>
        <g id="logo-text" transform="translate(41.000000, 0.000000)" fillOpacity="0.8" fontFamily="GillSans, Gill Sans" fill="#000000" fontSize="24.686" fontWeight="normal">
          <text id="Lifesci" x="0.004" y="23">Lifesci</text>
        </g>
      </g>
    </svg>
  </Link>
)


A_Logo.propTypes = {
};

A_Logo.defaultProps = {
};



export default A_Logo