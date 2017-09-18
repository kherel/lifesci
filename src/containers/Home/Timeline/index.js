import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeTimeline')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'
import update from 'immutability-helper';

class Timeline extends Component {

  state = {
    open: {}
  }

  toggleOpen = (i) => {
    const openObjKey = `item${i}`
    const newValue = !this.state.open[openObjKey]
    const newState = update(this.state, {open: {[openObjKey]:{$set: newValue}}})
    this.setState(newState)
  }

  getList(){
    const items = listData.map(({title,subtitle,type,description,list},i) => {
      const sublist = list.map((item, i) =>(
        <li key={i} className={cn('additional-item')}>{item}</li>
      ))
      const close = !this.state.open[`item${i}`]
      const closeOrOpen = close ? 'view all' : 'hide'
      return(
        <li key={i} className={cn('period-item')}>
          <div className={cn('main')}>
            <A_H type='title'>{title}</A_H>
            <A_H type='subtitle'>{subtitle}</A_H>
            <div className={cn('main-title')}>
              <A_P type='description'><span className='bold'>{type}</span>{description}</A_P>
            </div>
          </div>
          <div className={cn('additional')}>
            <div className={cn('additional-title')}>
              <A_H type='third'>{type}</A_H>
            </div>
            <ul className={cn('additional-list', {close})}>
              {sublist}
            </ul>
            <div className={cn('additional-view-line')} onClick={()=>this.toggleOpen(i)}>{closeOrOpen}</div>

          </div>
        </li>
      )
    })

    return(
      <ul className={cn('period-list')}>
        {items}
      </ul>
    )
  }

  render() {
    const list = this.getList()
    return (
      <div className={cn('root')}>
        <A_Container type='normal'>
          {list}
        </A_Container>
      </div>
    )
  }
}

Timeline.propTypes = {
};

Timeline.defaultProps = {
}

export default Timeline;

const listData = [
  {
    title: 'Q4 2017',
    subtitle: 'OCTOBER - DECEMBER, 2017',
    type: 'Platform development',
    description: 'Lifesci Brand awareness and Token Sale Phase #1',
    list: [
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
    ]
  },
  {
    title: 'Q1 2018',
    subtitle: 'JANUARY - MARCH, 2018',
    type: 'Platform development',
    description: 'Lifesci Alpha, Token Sale Phase #2, Tokens emission, Lifesci Token listing',
    list: [
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
    ]
  },
  {
    title: 'Q2 2018',
    subtitle: 'APRIL - JUNE, 2018',
    type: 'Platform development',
    description: 'Lifesci security audit and product launch',
    list: [
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
    ]
  },
  {
    title: 'Q3 2018',
    subtitle: 'APRIL - JUNE, 2018',
    type: 'Platform development',
    description: 'API integration in 10 medical institutions, in-platform items value exceeding $200M',
    list: [
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
      'Need more description in here. Some text to explain what we are doing',
    ]
  },

]