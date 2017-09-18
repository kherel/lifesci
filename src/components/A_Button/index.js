import React, { PropTypes } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {Link} from 'react-router'
import {cssClassName} from 'utils'
const cn = cssClassName('A_Btn')
import history from 'history'

const A_Btn = ({type, children, disabled, btnType, to, onClick, ...props}) =>{

  disabled = disabled && 'disabled'

  switch(type){
    case 'link-primary':
    case 'link-secondary':

      return (
        <Link className={cn('link', {type}, [disabled])} {...props}>
          {children}
        </Link>
      )
    default:
      return (
        <button className={cn('button', {type}, [disabled])} type={btnType} {...{onClick,...props}}>
          {children}
        </button>
      )
  }
}

A_Btn.propTypes = {
  type: T.oneOf([
    'link-primary', // solid btn
    'link-secondary' // transparent btn
  ]).isRequired,
  btnType: T.oneOf([ // button tag attribute
    'button',
    'submit',
    'reset'
  ]),
  to: T.string.isRequired,
  disabled: T.bool
};

A_Btn.defaultProps = {
  to: '#',
  btnType: 'button'
}

export default A_Btn