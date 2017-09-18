import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeContracts')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import A_Link from 'A_Link'

class Contracts extends Component {

  getMenu(){
    const renderedButtons = (
      buttons.map(({name, external}, i) => {
        if(name){
          return(
            <li key={i}>
              <A_Link type='button' external>{name}</A_Link>
            </li>
          )
        }else{
          return(
            <li key={i}>
              <div className='line' />
            </li>
          )
        }
      }
    ))
    return(
      <ul>{renderedButtons}</ul>
    )
  }

  render() {
    return (
      <div className={cn('root')}>
        <A_Container type='section'>
          <div className={cn('title')}>
            <A_H type='title'>Lifesci contracts</A_H>
            <A_H type='section-subtitle'>Some text about the smart contracts that are written by the Lifesci and suppose to work around the issues and other various stuff that we are doing.</A_H>
          </div>
          <div className={cn('inner')}>
            <div className={cn('code')}>
                <A_Image src='/img/screen.png'/>
            </div>
            <div className={cn('menu')}>
              {this.getMenu()}
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}

Contracts.propTypes = {
};

Contracts.defaultProps = {
}

export default Contracts;

const buttons = [
  {name:'LSCI token contract'},
  {name:'Token implementation'},
  {name:'LIFESCI placeholder'},
  {name:'ConsenSys multisig'},
  {},
  {name:'Check our Github', external: true},
]

