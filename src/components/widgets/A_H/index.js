import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_H')

const A_H = ({type, children, center, mx}) =>{

  let tagType
  switch(type){
    case 'main':
    case 'hero':
      tagType = 'h1'
      break;
    case 'timeline':
      tagType = 'h2'
      break;
    case 'title':
    case 'section':
    case 'about':
      tagType = 'h3'
      break;
    case 'small':
    case 'small-section':
    case 'subtitle':
      tagType = 'h4'
      break;
    case 'section-subtitle':
    case 'third':
    case 'second':
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
    'hero', //white 500/40
    'main', //black 500/40
    'timer', //black bold 500/16 center
    'about', //black 800/24 center
    'second', //black 500/19/1.47
    'title', //black 500/40/48
    'section', //black georgia 40/1.25/;
    'subtitle', //black trans bold/12/1.33
    'third', //black 500/19/1.47
    'small', //black trans bold/12/1.33 center
    'small-section', //black 500/19px/1.47
    'section-subtitle' //bold/15/1.73 rgba(0, 0, 0, 0.65)
  ]),
  children: T.any.isRequired,
  mx: T.string
};

A_H.defaultProps = {
}
export default A_H