import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Faq')
import A_Container from 'A_Container'
import Search from './Search'

class Faq extends Component {

  state = {}

  render() {

    return (
      <div>
        <A_Container type='hero' mx={cn('hero')}>
          <Search handleSubmit={t => console.log(t)} placeholder={'Have a question? Enter a search term here… '} />
        </A_Container>
      </div>
    )
  }
}

Faq.propTypes = {
};

Faq.defaultProps = {
}

export default Faq