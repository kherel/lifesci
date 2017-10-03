import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_RadioBtn')

const A_RadioBtn = ({children, value, mx, type, checked, onChange}) =>{

  value = value || children
  checked = value === checked
  const handleChange = (e) => onChange(e.target.value)
  return(
     <div className={cn({type},[mx])}>
       <input className={cn("radio")} type="radio" {...{value, onChange:handleChange, checked}}/>
       <div className={cn("inner")}  >{children || value}</div>
     </div>
  )
}

A_RadioBtn.propTypes = {
  type: T.oneOf([
    'calc', // calc
  ]).isRequired,
  name: T.string
};

A_RadioBtn.defaultProps = {
  name: 'radio'
}
export default A_RadioBtn