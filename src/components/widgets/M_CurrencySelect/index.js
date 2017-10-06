import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_CurrencySelect')
import onClickOutside from 'react-onclickoutside'

class M_CurrencySelect extends Component {
  state = {
    value: this.props.value || this.props.options[0].value,
    isOpened: false
  }


  handleClickOutside = () => {
    this.closeMenu()
  }

  closeMenu(){
    this.setState({isOpened:false})
  }

  handleChange = (value) => {
    this.closeMenu()
    this.props.onChange && this.props.onChange(value)
  }

  handleClick = () =>{
    this.setState({isOpened: !this.state.isOpened})
  }

  getListOptions(options, isOpened, value) {
    const renderOptions = options.map(opt => {
      const selected = value === opt.value
      return (
        <ol
          value={opt.value}
          key={'key_' + opt.value}
          className={cn('options-item', {selected})}
          onClick={() => this.handleChange(opt.value)}
        >
          <div>
            {opt.label}
          </div>
          <div className={cn('mark', {icon: opt.value})}/>
        </ol>
      )
    })

    return (
      <ul className={cn('options-list', {closed: !isOpened})}>
        {renderOptions}
      </ul>
    )
  }

  render() {
    const {options, mx, value} = this.props
    const {isOpened} = this.state
    const { label } = options.find( option => option.value === value)
    return (
      <div className={cn({isOpened}, [mx])} onClick={this.handleClick} >
        <div className={cn('label', {currency: value})}>
          {label}
          <div className={cn('mark', {icon: value})}/>
        </div>
        {this.getListOptions(options, isOpened, value)}
        <hr className={cn('hr', {isOpened})} />
      </div>
    )
  }
}

M_CurrencySelect.propTypes = {
  value: T.string.isRequired,
  mx: T.string,
  options: T.array.isRequired
};

M_CurrencySelect.defaultProps = {
  options: [{value: '', label: ''}]
}

export default onClickOutside(M_CurrencySelect)
