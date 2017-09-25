import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeHero')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import Timer from './Timer'
import A_Button from 'A_Button'
import About from "./About";

class Hero extends Component {

  render() {
    return (
      <A_Container type='hero'>
        <div className={cn('inner')}>
          <div className={cn('info')}>
            <A_H type="hero" >Solving life sciences real problems of today.</A_H>
          </div>
          <div className={cn('timer')}>
            <A_H type='timer'>Pre-contribution begins</A_H>
            <A_H type='timer' mx={cn('timer-date')}>October 14th at 2pm GMT</A_H>
            <Timer />
          </div>
        </div>
        <A_P type="hero">Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
        <A_Button type='link-secondary'>Subscribe me</A_Button>
        <A_Button type='link-primary'>How to Contribute</A_Button>
        <About/>
      </A_Container>
    )
  }
}

Hero.propTypes = {
};

Hero.defaultProps = {
}

export default Hero;