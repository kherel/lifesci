import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('FaqCatalog')
// import O_Fixed from 'O_Fixed'
import A_H from 'A_H'
import A_P from 'A_P'
// import A_Link from 'A_Link'

// const initOffset = 222

class FaqResults extends Component {

  state = {
    opened:[]
  }

  sections = {}

  getSections(resultSlugs){
    return(
      resultSlugs.map(this.getQuestion)
    )
  }

  getQuestion = (slug) => {
    const {entities} = this.props
    const isOpened = this.state.opened.includes(slug)
    let opened;
    if(isOpened) {
      opened = this.state.opened.filter(e => e !== slug);
    } else {
      opened = this.state.opened.concat(slug);
    }
    return (
      <div className={cn('item')} key={slug} >
        <div className={cn('item-header', {'is-opened': isOpened})} onClick={() => this.setState({opened})}>
          <A_H type='faq' key={slug}>{slug}</A_H>
        </div>
        <article dangerouslySetInnerHTML={{__html: entities[slug]}} className={cn('item-article', {'is-opened': isOpened})}/>
      </div>
    )
  }

  render() {

    const {entities, search} = this.props
    const slugs = Object.keys(entities)
    const resultSlugs = slugs.filter(slug => slug.toLowerCase().includes(search.toLowerCase()))
    const sections = this.getSections(resultSlugs)

    return (

      resultSlugs.length ?
        <A_Container
          type='normal'
          mx={cn('container')}
        >
          <div className={cn('aside')} />
          <div className={cn('main')}>
            {sections}
          </div>
        </A_Container>
        :        <A_Container
          type='normal'
          mx={cn('container')}
        >
          <A_P type='section' mx={cn('no-result')}>
            Sorry! We looked everywhere, but couldn't find “{search}”. 💔 🔍
            Please try reformulating your query.
          </A_P>
        </A_Container>



    )
  }
}

FaqResults.propTypes = {};

FaqResults.defaultProps = {

}

export default FaqResults