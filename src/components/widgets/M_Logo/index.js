import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Logo')
import {Link} from 'react-router'

const A_Logo = () => (
  <Link className={cn()} to="/">
    <img src="/img/common/logo.svg" className={cn('image')} />
  </Link>
)


A_Logo.propTypes = {
};

A_Logo.defaultProps = {
};



export default A_Logo