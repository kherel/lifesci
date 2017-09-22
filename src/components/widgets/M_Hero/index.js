import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_Hero')

const M_Hero = ({children, mx}) =>(
  <div className={cn([mx])}>{children}</div>
)

M_Hero.propTypes = {
  mx: T.string,
  children: T.node.isRequired
};

M_Hero.defaultProps = {
  type: 'normal'
}
export default M_Hero