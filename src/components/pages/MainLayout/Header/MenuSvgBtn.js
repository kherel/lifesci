import React from 'react';
//import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('MenuSvgBtn')

const MenuSvgBtn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17">
    <path d="M0 0h24v3H0V0zm0 7h24v3H0V7zm0 7h24v3H0v-3z" id='mob-menu-btn'/>
  </svg>

)

MenuSvgBtn.propTypes = {};

MenuSvgBtn.defaultProps = {}
export default MenuSvgBtn