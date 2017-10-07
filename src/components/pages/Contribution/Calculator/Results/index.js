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
      const {lsci, standart} = f(tokenAmount)
      return(
        <div className={cn('table')} key={i}>
          <A_H type='tbody' mx={cn('table-area')}>{name}</A_H>
          <A_H type='tbody' mx={cn('table-potential')}>{`${lsci}, ${standart}`}</A_H>
          <A_H type='tbody' mx={cn('table-estimate')}>{lsci}</A_H>
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


const _nf = (x) => (numberWithCommas(x.toString(), 2))

const data = [
  {name: 'Estimated Number of Lives Improved', f: token => ({lsci: _nf(token * 1351.35), standart: _nf(token * 833.33)})},
  {name: 'Estimated Number of Lives Saved', f: token => ({lsci: _nf(token * 1.75), standart: _nf(token * 1.5)})},
  {name: 'Estimated Number of Patents Created', f: token => ({lsci: _nf(token * 0.28), standart: _nf(token * 0.16)})},
  {name: 'Estimated Number of Project Funded', f: token => ({lsci: _nf(token * 0.028), standart: _nf(token * 0.025)})},
  {name: 'Estimated Number of Industry Influencers', f: token => ({lsci: _nf(token * 0.0625), standart: _nf(token * 0.05)})},
]