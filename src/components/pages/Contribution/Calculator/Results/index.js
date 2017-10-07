import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('ContributionCalculatorResults')
import A_Container from 'A_Container'
import A_P from 'A_P'
import A_H from 'A_H'
import {numberWithCommas} from 'utils'



class ContributionCalculatorResults extends Component {

  state = {}

  renderData = (tokenAmount) => (
    data.map( ({name, f}, i) =>{
      let {lsci, standart} = f(tokenAmount)
      let lsciV, standartV;

      if(!lsci){
        lsciV = 0
        standartV = 0
      } else {
        const isMax = lsci/ pctData[i] >= 100
        if(isMax){
          lsciV = 100
          standartV = standart / lsci * lsciV
        } else {
          lsciV = lsci / pctData[i]
          standartV = standart / lsci * lsciV
        }
      }

      return(
        <div className={cn('table')} key={i}>
          <div className={cn('table-area')}>
            <A_H type='tbody' mx={cn('table-text')}>{name}</A_H>
          </div>
          <div className={cn('table-potential')}>
            <div style={{width:`${lsciV}%`}} className={cn('line', {type: 'lsci'})} />
            <div style={{width:`${standartV}%`}} className={cn('line', {type: 'standart'})} />
            <span className={cn('table-legend', {type: 'lsci'})}>LSCI</span>
            <span className={cn('table-legend', {type: 'standart'})}>Traditional model</span>

          </div>
          <A_H type='tbody' mx={cn('table-estimate')}>{numberWithCommas(lsci.toString(), 2)}</A_H>
        </div>
      )
    }

    )
  )

  render() {
    const {text, tokenAmount} = this.props

    const tableBody = this.renderData(tokenAmount)
    return (
      <A_Container type='equal' mx={cn()}>
        <A_P type='section' mx={cn('text')}>{text}</A_P>
        <div className={cn('table')}>
          <A_H type='thead' mx={cn('table-area')}>AREA</A_H>
          <A_H type='thead' mx={cn('table-potential')}>POTENTIAL</A_H>
          <A_H type='thead' mx={cn('table-estimate')}>ESTIMATE</A_H>
        </div>
        {tableBody}
      </A_Container>
    )
  }
}

ContributionCalculatorResults.propTypes = {
  tokenAmount: T.number.isRequired,
  text: T.string.isRequired
};

ContributionCalculatorResults.defaultProps = {
  tokenAmount: 0,
  text: ''
}

export default ContributionCalculatorResults

const data = [
  {name: 'Estimated Number of Lives Improved', f: token => ({lsci: token * 1351.35, standart:  token * 833.33})},
  {name: 'Estimated Number of Lives Saved', f: token => ({lsci:  token * 1.75, standart:  token * 1.5})},
  {name: 'Estimated Number of Patents Created', f: token => ({lsci:  token * 0.28, standart:  token * 0.16})},
  {name: 'Estimated Number of Project Funded', f: token => ({lsci:  token * 0.028, standart:  token * 0.025})},
  {name: 'Estimated Number of Industry Influencers', f: token => ({lsci:  token * 0.0625, standart:  token * 0.05})},
]

const _max = 40

const pctData = data.map(({f}) => (f(_max * 0.01).lsci) )
