import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Contribution')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Button from 'A_Button'
import Donut from './Donut'
import Calculator from './Calculator'
import Contracts from './Contracts'

class Contribution extends Component {

  getInfo(){
    let res = []
    for ( let key in info){
      res.push(
        <div key={key} className={cn('ico')}>
          <A_P type='info' mx={cn('ico-text')}>{info[key]}</A_P>
          <A_P type='info' mx={cn('ico-text')}>{infoData[key]}</A_P>
        </div>
      )
    }
    return res
  }

  render(){
    const dataArray = [25, 20, 55 ]
    const color = ['#cacdff', '#888ee8', '#3f46ad']
    const renderInfo = this.getInfo()
    const {currencies, loaded, contracts} = this.props
    return (
      <div>
        <A_Container type='hero' mx={cn('hero')}>
          <A_H type="hero">LSCI token launch</A_H>
          <A_P type="hero">The role of project token is twofold: it is both a usage token on the Lifesci network and a payment token on the Lifesci marketplace. </A_P>
          <footer className={cn('hero-footer')}>
            <A_Button type='link-primary' mx={cn('contribute')}>Contribute</A_Button>
            <A_P type='micro' mx={cn('hero-footer-text')}>Bitcoin Suisse is a regulated financial entity based in Switzerland. They handle the KYC (know your customer) and AML (anti-money laundering) compliance for the contributions.</A_P>
          </footer>
        </A_Container>
        <A_Container type='normal' mx={cn('ico-container')}>
          {renderInfo}
        </A_Container>
        <div className={cn('allocation-wrapper')}>
          <A_Container type='equal' mx={cn('allocation')}>
            <aside className={cn('allocation-info')}>
              <A_H type='section' mx={cn('allocation-title')}>Token Allocation</A_H>
              <A_P type='section' mx={cn('allocation-subtile')}>Proper breakdown of the LSCI token distribution will allow the Lifesci platform to focus on the growth and development.</A_P>
              <div className={cn('allocation-line')}>
                <div className={cn('allocation-color')} style={{backgroundColor: color[2]}}/>
                  <A_P type='section' mx={cn('allocation-text')}>{dataArray[2]}%</A_P>
                  <A_P type='section' mx={cn('allocation-text')}>Allocated to public</A_P>
              </div>
              <div className={cn('allocation-line')}>
                <div className={cn('allocation-color')} style={{backgroundColor: color[1]}}/>
                <A_P type='section' mx={cn('allocation-text')}>{dataArray[1]}%</A_P>
                <A_P type='section' mx={cn('allocation-text')}>Allocated to Lifesci team </A_P>
              </div>
              <div className={cn('allocation-line')}>
                <div className={cn('allocation-color')} style={{backgroundColor: color[0]}}/>
                <A_P type='section' mx={cn('allocation-text')}>{dataArray[0]}%</A_P>
                <A_P type='section' mx={cn('allocation-text')}>Reserve fund</A_P>
              </div>
            </aside>
            <Donut data={dataArray} color={color} mx={cn('allocation-pie')}/>
          </A_Container>
        </div>
        <Calculator {...{currencies, loaded}}/>
        <Contracts {...contracts}/>
      </div>
    )
  }
}

Contribution.propTypes = {
};

Contribution.defaultProps = {
}

export default Contribution



const infoData = {
  cap: '5M USD',
  start: 'October 14th, 2017',
  end: 'October 19th, 2017',
  minContribution: '5,000 USD',
  maxContribution: 'N/A',
  price: '1 LSCI =  5,000 USD',
  bonus: '10%'
}

const info = {
  cap: 'Cap',
  start: 'Start date',
  end: 'End date',
  minContribution: 'Min. Contribution',
  maxContribution: 'Max. Contribution',
  price: 'Price',
  bonus: 'Bonus'
}