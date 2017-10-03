import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('ContributionCalculator')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Container from 'A_Container'
import A_RadioBtn from "A_RadioBtn";
import M_IconSelect from 'M_IconSelect'

class ContributionCalculator extends Component {

  state = {
    mode: 'standard',
    currency: 'gbp',
    token: 'lsci'
  }

  onRadionChange = (mode) => {
    this.setState({mode})
  }

  render() {

 //   const {} = this.props

    const {mode, currency, token} = this.state

    const navBtnProps ={
      type: 'calc',
      checked: mode,
      onChange: this.onRadionChange,
      mx:cn('nav-btn')
    }


    return (
      <div>
        <A_Container type='equal' mx={cn('header')}>
          <A_H type='section' mx={cn('section')}>Contribution Simulator</A_H>
          <A_P type='section' mx={cn('section')}>The platform includes the latest industry reports and specific data analytics in order to understand and apprehend the health sector. </A_P>
        </A_Container>
        <A_Container type='normal' mx={cn('nav')}>
          <A_RadioBtn {...navBtnProps}>standard</A_RadioBtn>
          <A_RadioBtn {...navBtnProps}>turbo</A_RadioBtn>
        </A_Container>
        <A_Container type='normal' mx={cn('calc')}>
          <div className={cn('calc-side')}>
            <span className={cn('calc-label')}>from</span>
            <M_IconSelect
                          options={currencyOptions}
                          mx={cn('dropdown')}
                          onChange={currency => this.setState({currency})}
                          value = {currency}
                          />
          </div>

          <div className={cn('calc-side')}>
            <span className={cn('calc-label')}>to</span>
            <M_IconSelect
              options={tokensOptions}
              mx={cn('dropdown')}
              onChange={token => this.setState({token})}
              value = {token}
            />
          </div>
        </A_Container>
        <A_Container type='equal' mx={cn('results')}>
          <A_P type='section' mx={cn('results-text')}>{infoText[mode]}</A_P>
          <div className={cn('table')}>
            <A_H type='thead' mx={cn('table-area')}>AREA</A_H>
            <A_H type='thead' mx={cn('table-potential')}>POTENTIAL</A_H>
            <A_H type='thead' mx={cn('table-estimate')}>ESTIMATE</A_H>
          </div>

        </A_Container>
      </div>

    )
  }
}

ContributionCalculator.propTypes = {
};

ContributionCalculator.defaultProps = {
}

export default ContributionCalculator

const currencyOptions = [
  {label:'GBP - British Pound', value: 'gbp'},
  {label:'USD - Unites States Dollar', value: 'usd'},
  {label:'EUR - EURO', value: 'eur'}
]

const tokensOptions = [
  {label:'LSCI - Lifesci Token', value: 'lsci'}
]

const infoText = {
  standard: 'The platform includes the latest industry reports and specific data analytics in order to understand and apprehend the health sector. The platform includes the latest industry reports and specific data.',
  turbo: 'turbo mode text'
}