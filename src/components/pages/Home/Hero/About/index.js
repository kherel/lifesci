import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeAbout')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'

class About extends Component {

  getList(){
    const items = listData.map((item,i) => (
      <li key={i} className={cn('list-item')}>
        <div className={cn('list-item-image')}>
          <A_Image src={`/img/icons/${item.icon}.svg`} realSize/>

        </div>
        <A_H type='second'>{item.title}</A_H>
        <A_P type='second'>{item.text}</A_P>
      </li>
    ))
    return(
      <ul className={cn('list')}>
        {items}
      </ul>
    )
  }

  render() {
    const list = this.getList()
    return (
      <div className={cn()}>
        <div className={cn('list-wrapper')}>
          {list}
        </div>
      </div>
    )
  }
}

About.propTypes = {
};

About.defaultProps = {
}

export default About;

const listData = [
  {
    icon: 'fund',
    title: 'The Fund',
    text: 'Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token.'
  },
  {
    icon: 'platform',
    title: 'The Platform',
    text: 'The Lifesci platform is a global marketplace for all types of participants  willing wanting to participate in the licence fee income from new medical breakthroughs not usually available.'
  },
  {
    icon: 'ai',
    title: 'The AI form',
    text: 'With a unique relationship with one of the most exciting world leaders of new medical treatments in the healthcare industry, Lifesci develops an intelligent platform about the life science and healthcare sector.'
  }
]