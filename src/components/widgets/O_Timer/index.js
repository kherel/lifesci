import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeTimer')
import A_H from 'A_H'
import Timer from './Timer'

const HomeTimer = ({mx}) =>{
  return(
    <div className={cn('timer', [mx])}>
      <A_H type='timer'>Pre-contribution begins</A_H>
      <A_H type='timer' mx={cn('timer-date')}>October 14th at 2pm GMT</A_H>
      <Timer />
    </div>  )
}

HomeTimer.propTypes = {
};

HomeTimer.defaultProps = {
}
export default HomeTimer