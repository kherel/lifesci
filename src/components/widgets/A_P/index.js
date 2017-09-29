import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')

const A_P = ({children, type, mx}) =>(
  <p className={cn({type}, [mx])}>{children}</p>
)

A_P.propTypes = {
  type: T.oneOf([
    'hero',
    'section', //20/1.4/;
    'second', // 17/1.53/rgba(0, 0, 0, 0.65)
    'description', // 24/1.5/rgba(0, 0, 0, 0.65)
    'tweet', // 16/1.5/rgba(0, 0, 0, 0.65)
    'name', // white georgia 32/1.31 :global
    'title', // white 20/1.4
    'article-text' //rgba(0, 0, 0, 0.65) 17/1.53
  ]),
};

A_P.defaultProps = {
}
export default A_P