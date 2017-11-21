import React, {Component} from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Search');


class O_Search extends Component {

  render() {
    const {placeholder, value, handleChange, handleReset} = this.props
    return (
      <form action="" className={cn('search')} onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          className={cn('input')}
          placeholder={placeholder}
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <button className={cn('submit')} type="submit">
          <svg className={cn('icon', {type: 'search'})} width="18" height="18" viewBox="0 0 18 18">
            <path fill="#BFBFBF" d="M17.78 16.72l-4.988-4.988a7.2 7.2 0 1 0-1.06 1.06l4.988 4.988a.75.75 0 1 0 1.06-1.06zM1.502 7.2c0-3.144 2.555-5.7 5.7-5.7 3.143 0 5.698 2.556 5.698 5.7s-2.555 5.7-5.699 5.7a5.705 5.705 0 0 1-5.7-5.7z"/>
          </svg>
        </button>
        {
          value &&
            <button className={cn('reset')} onClick={handleReset} >
              <svg className={cn('icon', {type: 'clear'})} viewBox="0 0 10 10" strokeWidth="1" fill="#333333">
                <path d="M1.288,0.227 L9.773,8.712 L8.713,9.773 L0.226,1.288 L1.287,0.227 L1.288,0.227 Z M0.227,8.712 L8.712,0.227 L9.773,1.287 L1.288,9.773 L0.227,8.713 L0.227,8.712 Z" />
              </svg>
            </button>
        }
      </form>
    )
  }
}


O_Search.propTypes = {
  placeholder: T.string.isRequired
};

export default O_Search