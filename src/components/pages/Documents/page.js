import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Documents')
import A_Container from 'A_Container'
import Hero from './Hero'
import A_P from 'A_P'
import A_Button from 'A_Button'
import A_Link from 'A_Link'

class Documents extends Component {

  getCards(entities){
    const cards = entities.map(({name, type, url}, i) => (
      <div key={i} className={cn('item')}>
        <span className={cn('file', {type})}>{name}</span>
        <div className={cn('item-buttons')}>
          <A_Button external type='link-secondary' to={url} >View in browser</A_Button>
          <A_Button external download={name} type='link-primary' to={url} mx={cn('download')}>Download</A_Button>
        </div>
      </div>

    ))
    return(cards)
  }


  render() {
    const documentList = this.getCards(docs)

    return (
      <div className={cn()}>
        <Hero />
        <A_Container type="normal" mx={cn('main')}>
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
    name: 'Whitepaper',
    type: 'pdf',
    url: '/pdf/sample.pdf'
  },
  {
    name: 'Crowdsale Document',
    type: 'pdf',
    url: '/pdf/sample.pdf'
  },
  {
    name: 'Explanatory Note and Governance Term',
    type: 'pdf',
    url: '/pdf/sample.pdf'
  },
  {
    name: 'SEC Howey Test',
    type: 'pdf',
    url: '/pdf/sample.pdf'
  },
]
