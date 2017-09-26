import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_Press')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'
import A_Link from 'A_Link'

const O_Press = () =>{
  return(
    <div className={cn()}>
      <A_Container type='section' mx={cn('section')}>
        <A_H type='small-section' mx={cn('title')}>You are in a good company</A_H>
        <A_P type='second' mx={cn('sub-title')}>Lifesci was mentioned in the following press</A_P>
        <div className={cn('logos')}>
          {logos.map(({name, url},i) => (
            <A_Link to={url} key={i} mx={cn('link')}>
              <A_Image src={`/img/logos/${name}.svg`} alt={name} realSize mx={cn('img')}/>
            </A_Link>
          ))}
        </div>
      </A_Container>
    </div>
  )
}

O_Press.propTypes = {
};

O_Press.defaultProps = {
}
export default O_Press

const logos = [
  {name: 'logo-google', ulr: '#'},
  {name: 'logo-buzzfeed', ulr: '#'},
  {name: 'logo-foursquare', ulr: '#'},
  {name: 'logo-sega', ulr: '#'},
  {name: 'logo-autodesk', ulr: '#'},
  {name: 'logo-paypal', ulr: '#'},
  {name: 'logo-nbc', ulr: '#'},
  {name: 'logo-fitbit', ulr: '#'},
  {name: 'logo-etsy', ulr: '#'},
  {name: 'logo-groupon', ulr: '#'}
]
