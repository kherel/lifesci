import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_P')

const A_P = ({children, type}) =>(
  <p className={cn({type})}>{children}</p>
)

A_P.propTypes = {
  type: T.oneOf([
    'hero',
    'item', // 17/1.53/rgba(0, 0, 0, 0.65)
    'description', // 24/1.5/rgba(0, 0, 0, 0.65)
    'tweet' // 16/1.5/rgba(0, 0, 0, 0.65)
  ]),
};

A_P.defaultProps = {
}
export default A_P