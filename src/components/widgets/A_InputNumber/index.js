import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_InputText')
import {numberWithCommas, cleanNumber} from 'utils'

function getFontSize(value, maxSize, minSize, maxLength = 11){

  const vLength = value.toString().length

  if(vLength < 5){
    return maxSize
  } else if(vLength > maxLength - 5){
    return minSize
  } else {
    const sizeDelta = maxSize - minSize
    const lengthDelta = maxLength - 5
    console.log(minSize, sizeDelta, (sizeDelta/lengthDelta * vLength), vLength)

    return (
      minSize + (sizeDelta - (sizeDelta/lengthDelta * vLength))
    )
  }

}

class A_InputNumber extends Component {

  onChange = (e) => {
    const {handleChange, max} = this.props
    let value = cleanNumber(e.target.value)
    if (max) {
      value = value.substr(0, max)
    }
    handleChange(value)
  }

  render() {
    const {value, max} = this.props
    const fontSize = getFontSize(value, 10, 4, max)

    return (
      <input
        className={cn()}
        type="text"
        value={numberWithCommas(value)}
        onChange={this.onChange}
        style={{fontSize: `${fontSize}rem`}}
      />
    )
  }
}

A_InputNumber.propTypes = {
  handleChange: T.func.isRequired,
  value: T.string.isRequired,
  placeHolder: T.string,
  prefix: T.string,
  max: T.number
};

A_InputNumber.defaultProps = {
  max: 11,
  value: 0
}

export default A_InputNumber

