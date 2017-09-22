import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Documents')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import M_Hero from 'M_Hero'
import A_P from 'A_P'

class Documents extends Component {

  getCards(entities){
    const cards = entities.map(({name, img, url}, i) => (
      <div key={i} className={cn('card')}>
        <div className={cn('card-name')}>{name}</div>
        <A_Image mx={cn('card-img')} src={`/img/docs-img/${img}`}/>
      </div>

    ))
    return(
      <ul className={cn('card-list')}>
        {cards}
      </ul>
    )
  }

  renderHero = () => (
    <M_Hero>
      <A_Container type='normal'>
        <A_H type="hero">Relevant Documents</A_H>
        <A_P type="hero">The team behind the Lifesci platform is blah blah  and is based in the London, Uk. Most of the team is remote and spread across the world.</A_P>
      </A_Container>
    </M_Hero>
  )

  render() {

    const hero = this.renderHero()
    const documentList = this.getCards(docs)

    return (
      <div className={cn()}>
        {hero}
        <A_Container type={'smart'}>
          <A_H type='main' >Platform documentation</A_H>
          {documentList}
        </A_Container>
      </div>
    )
  }
}

Documents.propTypes = {
};

Documents.defaultProps = {
}

export default Documents;


const docs = [
  {
    name: 'One Pager',
    img: 'orange.svg',
    url: 'orange'
  },
  {
    name: 'Whitepaper',
    img: 'blue.svg',
    url: 'blue'
  },
  {
    name: 'SEC Howey Test',
    img: 'green.svg',
    url: 'green'
  },
]
