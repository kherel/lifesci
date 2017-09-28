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
      if(external){
        return (
          <Link className={cn('link', {type}, [mx])} disabled={disabled} to={to} {...props}>
            {children}
          </Link>
        )
      } else {
        return(
          <a href={to} className={cn('link', {type}, [mx, 'link-external'])}>
            {children}
          </a>
        )
      }

    case 'button-primary':
    case 'button-secondary':
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
    'link-primary', // solid link
    'link-secondary', // transparent link
    'button-primary', //solid btn
    'button-secondary', //transparent btn
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