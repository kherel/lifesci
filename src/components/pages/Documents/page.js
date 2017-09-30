import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Documents')
import A_Container from 'A_Container'
import Hero from './Hero'
import O_File from 'src/components/widgets/O_File'

class Documents extends Component {

  getCards(entities){
    return entities.map((props, i) => <O_File key={i} {...props}/>)
  }

  render() {

    const cards = this.getCards(files)
    return (
      <div className={cn()}>
        <Hero />
        <A_Container type="normal" mx={cn('main')}>
          {cards}
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


const files = [
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
