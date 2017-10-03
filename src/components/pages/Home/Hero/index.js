import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeHero')
import A_Container from 'A_Container'
import A_Button from 'A_Button'
import A_H from 'A_H'
import A_P from 'A_P'
import O_Timer from 'O_Timer'
import Circles from 'O_Timer/Circles'

class Hero extends Component {

  render() {
    return (
      <A_Container type='hero' mx={cn('container')}>
        <A_H type="hero" mx={cn('title')}>Solving life sciences real problems of today.</A_H>
        <O_Timer mx={cn('timer-mobile')}/>
        <A_P type="hero" mx={cn('text')}>Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
        <A_Button type='link-secondary'>Subscribe me</A_Button>
        <A_Button type='link-primary'>How to Contribute</A_Button>
        <O_Timer mx={cn('timer-desktop')}/>
        <Circles className={cn('circles')} />
      </A_Container>
    )
  }
}

Hero.propTypes = {
};

Hero.defaultProps = {
}

export default Hero;