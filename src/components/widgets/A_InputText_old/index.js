import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')

const A_InputText = ({value, handleChange, error, mx}) =>{
  return(
    <div className={cn([mx])}>
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        className={cn('input')}
      />
      {error}
    </div>
  )
}

A_InputText.propTypes = {
};

A_InputText.defaultProps = {
}
export default A_InputText