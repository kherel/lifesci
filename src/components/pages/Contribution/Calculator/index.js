import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('ContributionCalculator')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Container from 'A_Container'
import A_RadioBtn from "A_RadioBtn";
import M_IconSelect from 'src/components/widgets/M_CurrencySelect'
import A_InputNumber from 'A_InputNumber'
import Results from './Results'

class ContributionCalculator extends Component {

  state = {
    mode: 'standard',
    currency: 'gbp',
    token: 'lsci',
    tokenValue: 0,
    moneyValue: 0,
  }

  onChangeMoneyInput = (moneyValue) => {
    const {currencies} = this.props
    const {currency, mode} = this.state
    const turbo = mode === turbo
    const usdValue = moneyValue / currencies[currency]
    const tokenValue = Math.floor(usdValue / 5000 * (turbo ? 1.1 : 1) * 100000000) / 100000000
    this.setState({moneyValue, tokenValue})
  }

  onChangeTokenInput = (tokenValue) => {
    const {currencies} = this.props
    const {currency, mode} = this.state
    const turbo = mode === 'turbo'
    const usdValue = tokenValue * 5000 * (turbo ? 1.1 : 1)
    const moneyValue =  Math.floor(usdValue * currencies[currency] * 100) / 100
    this.setState({moneyValue, tokenValue})
  }

  onCurrencyChange = (currency) => {
    const {currencies} = this.props
    const {tokenValue} = this.state
    const moneyValue = Math.floor(tokenValue * 5000 * currencies[currency] * 100) / 100
    this.setState({currency, moneyValue})
  }

  onChangeMode = (mode) => {
    const {currencies} = this.props
    const {currency, moneyValue} = this.state
    const turbo = mode === 'turbo'
    const usdValue = moneyValue / currencies[currency]
    const tokenValue = Math.floor(usdValue / 5000 * 100000000 * (turbo ? 1.1 : 1)) / 100000000
    this.setState({tokenValue, mode})
  }

  render() {
    const {mode, currency, token, tokenValue, moneyValue} = this.state
    const {loaded} = this.props
    if(!loaded) return null

    const navBtnProps ={
      type: 'calc',
      checked: mode,
      onChange: mode => this.onChangeMode(mode),
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
            <span className={cn('calc-label')}>From</span>
            <M_IconSelect
              options={currencyOptions}
              mx={cn('dropdown')}
              onChange={this.onCurrencyChange}
              value = {currency}
              />
            <A_InputNumber
              handleChange={this.onChangeMoneyInput}
              value = {moneyValue.toString()}
              mx={cn('calc-input')}
              afterComma = {2}
            />
          </div>

          <div className={cn('calc-side')}>
            <span className={cn('calc-label')}>To</span>
            <M_IconSelect
              options={tokensOptions}
              mx={cn('dropdown')}
              onChange={token => this.setState({token})}
              value = {token}
            />
            <A_InputNumber
              handleChange={this.onChangeTokenInput}
              value = {tokenValue.toString()}
              afterComma = {8}
              mx={cn('calc-input')}

            />
          </div>
        </A_Container>
        <Results text = {infoText[mode]} tokenAmount={+ tokenValue}/>
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
  {label:'EUR - Euro', value: 'eur'},
  {label:'CHF - Swiss Franc', value: 'chf'}
]

const tokensOptions = [
  {label:'LSCI - Lifesci Token', value: 'lsci'}
]

const infoText = {
  standard: 'The platform includes the latest industry reports and specific data analytics in order to understand and apprehend the health sector. The platform includes the latest industry reports and specific data.',
  turbo: 'turbo mode text'
}