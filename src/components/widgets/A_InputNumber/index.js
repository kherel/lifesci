import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputNumber')
import {numberWithCommas, cleanNumber} from 'utils'

class A_InputNumber extends Component {

  onChange = (e) => {
    const {handleChange, max, afterComma} = this.props
    let value = cleanNumber(e.target.value, afterComma)
    value = value.substr(0, max)
    handleChange(value)
  }

  render() {
    const {value, mx, fontClassSize:size} = this.props
    return (
      <input
        className={cn({size},[mx])}
        type="text"
        value={numberWithCommas(value)}
        onChange={this.onChange}
      />
    )
  }
}

A_InputNumber.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
  prefix: T.string,
  max: T.number,
  afterComma: T.number.isRequired,
  fontSize: T.number.isRequired

};

A_InputNumber.defaultProps = {
  max: 11,
  value: 0,
  afterComma: 2,
  fontSize: 10
}

export default A_InputNumber

