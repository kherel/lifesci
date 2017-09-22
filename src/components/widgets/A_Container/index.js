import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Container')

const A_Container = ({children, type, mx}) =>(
  <div className={cn({type}, [mx])}>{children}</div>
)

A_Container.propTypes = {
  type: T.oneOf([
    'normal',
    'wide', // 1100
    'hero', // hero
    'section', // margin 44 auto
    'smart' //
  ]),
  mx: T.string,
  children: T.node.isRequired
};

A_Container.defaultProps = {
  type: 'normal'
}
export default A_Container