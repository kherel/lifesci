import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeContracts')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import A_Link from 'A_Link'
import Embed from 'react-runkit'

class Contracts extends Component {

  state={
    loading: true
  }

  getDesktopMenu(){
    const renderedButtons = (
      buttons.map(({name, external}, i) => {
        if(name){
          return(
            <li key={i} >
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
      <ul className={cn('list-desktop')}>{renderedButtons}</ul>
    )
  }

  getMobMenu(){
    const links = buttons.map( ({name}, i) => {
      if(name){
        return(
          <option key={i}>{name}</option>
        )
      }else{
        return(
          false
        )
      }
    })

    return(
      <div className={cn('list-mob')}>
        <select>
          {links}
        </select>
      </div>
    )
  }
  render() {
    const {loading} = this.state
    return (
      <div className={cn('root')}>
        <A_Container type='section'>
          <A_H type='title' mx={cn('title')}>Lifesci contracts</A_H>
          <A_H type='section-subtitle' mx={cn('title')}>Some text about the smart contracts that are written by the Lifesci and suppose to work around the issues and other various stuff that we are doing.</A_H>
          <div className={cn('inner')}>
            <div className={cn('code', {loading})} >
              {
                  <Embed source={ helloSource} readOnly minHeight='200px' onLoad={()=> this.setState({loading:false})}/>
              }
            </div>
            <div className={cn('menu')}>
              {this.getDesktopMenu()}
              {this.getMobMenu()}
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

const helloSource = `console.log('Hello, world!')`
