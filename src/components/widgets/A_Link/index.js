import React from 'react';
import * as T from "prop-types";
import {Link} from 'react-router'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Link')

const A_Link = ({children, type, block, disabled, external, to, mx}) => {

  let _link
  const className= cn({block, type, external}, [disabled && 'disabled', mx])

  if (external) {
    _link =(
      <a className={className} href={to} target="_blank">{children}</a>
    )
  } else {
    _link =(
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }
  return _link
}
A_Link.propTypes = {
  type: T.oneOf([
    'nav',
    'button'
  ]),
  external: T.bool, // for external links
  disabled: T.bool,
  children: T.node.isRequired
};

A_Link.defaultProps ={
  // type: 'primary'
}

export default A_Link