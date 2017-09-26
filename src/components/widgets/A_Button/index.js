import React, { PropTypes } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {Link} from 'react-router'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn')
// import history from 'history'
import A_Link from 'A_Link'

const A_Btn = ({type, children, disabled, btnType, to, onClick, mx, external, ...props}) =>{

  disabled = disabled && 'disabled'

  switch(type){
    case 'link-primary':
    case 'link-secondary':
      return (
        <A_Link mx={cn('link', {type})} disabled={disabled} to={to} external={external}{...props}>
          {children}
        </A_Link>
      )
    case 'button-primary':
    default:
      return (
        <button className={cn('button', {type}, [disabled, mx])} type={btnType} {...{onClick,...props}}>
          {children}
        </button>
      )
  }
}

A_Btn.propTypes = {
  type: T.oneOf([
    'link-primary', // solid btn
    'link-secondary', // transparent btn like link
    'button-primary', //transparent btn
  ]).isRequired,
  btnType: T.oneOf([ // button tag attribute
    'button',
    'submit',
    'reset'
  ]),
  to: T.string,
  disabled: T.bool
};

A_Btn.defaultProps = {
  to: '#',
  btnType: 'button'
}

export default A_Btn