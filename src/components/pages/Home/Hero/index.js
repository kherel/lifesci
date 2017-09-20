import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeHero')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import O_FlipClock from 'O_FlipClock'
import A_Button from 'A_Button'

class Hero extends Component {

  render() {
    return (
      <div className={cn()}>
        <A_Container type='hero'>
          <div className={cn('inner')}>
            <div className={cn('info')}>
              <A_H type="main-white" mx={cn('hero-title')}>Solving life sciences real problems of today</A_H>
              <A_P type="hero">Lifesci is a unique vehicle to offer access to valuable licence fee income and a blockchain AI driven platform <span style={{whiteSpace: 'nowrap'}}>/ exchange /</span> big data intelligence platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
              <A_Button type='link-secondary'>Subscribe me</A_Button>
              <A_Button type='link-primary'>How to Contribute</A_Button>
            </div>
            <div className={cn('timer')}>
              <div className={cn('timer-before')} />
              <div className={cn('timer-after')} />
              <div className={cn('timer-inner')}>
                <A_H type='timer' mx={cn('timer-title')}>Crowdsale begins October 14th at 2pm GMT</A_H>
                <O_FlipClock />
              </div>
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}

Hero.propTypes = {
};

Hero.defaultProps = {
}

export default Hero;

