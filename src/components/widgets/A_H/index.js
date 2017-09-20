import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({type, icon, children, center, mx}) =>{

  let tagType
  switch(type){
    case 'main':
    case 'main-white':
      tagType = 'h1'
      break;
    case 'timeline':
      tagType = 'h2'
      break;
    case 'title':
    case 'about':
      tagType = 'h3'
      break;
    case 'small':
    case 'subtitle':
      tagType = 'h4'
      break;
    case 'section-subtitle':
    case 'third':
    case 'item':
      tagType = 'h5'
      break;
    default:
      tagType = 'h3'
  }

  center = center && 'center'

  return (
    React.createElement(
      tagType,
      {className: cn({type}, [center, mx])},
      children
    )
  )
}

A_H.propTypes = {
  type: T.oneOf([
    'main-white', //white 500/40
    'main', //black 500/40
    'timer', //black bold 500/16 center
    'about', //black 800/24 center
    'item', //black 500/19/1.47
    'title', //black 500/40/48
    'subtitle', //black trans bold/12/1.33
    'third', //black 500/19/1.47
    'small', //black trans bold/12/1.33 center
    'section-subtitle' //595959 17/1.53 center
  ]),
  children: T.any.isRequired,
  mx: T.string
};

A_H.defaultProps = {
}
export default A_H