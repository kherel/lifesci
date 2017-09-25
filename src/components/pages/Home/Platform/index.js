import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('Platform')
import A_H from 'A_H'

const Platform = () =>{
  return(
    <A_Container mx={cn('section')}>
      <div className={cn('left')}>
        <A_H type='section' >The Intelligence Platform</A_H>
      </div>
      <div className={cn('right')}>

      </div>
    </A_Container>
  )
}

Platform.propTypes = {
};

Platform.defaultProps = {
}
export default Platform