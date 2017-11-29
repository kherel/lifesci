import React, { Component } from 'react'
import ReadContainer from 'Read/container'
import FourOhFour from 'FourOhFour/page'

class HomeRoute extends Component {
  render() {
    if (lookup[this.props.params.hash] !== undefined) {
      return <ReadContainer />
    } else {
      return <FourOhFour />
    }
  }
}

const lookup = {
  l34j5A: '/pdf/Lifesci Whitepaper.pdf',
  X3kd73: '/pdf/sample.pdf',
  dm854f: '/pdf/A Securities Law Framework for Blockchain Tokens.pdf',
  LdKlj7: '/pdf/Lifesci Whitepaper.pdf',
  lanu48: '/pdf/Lifesci Whitepaper.pdf',

}

export default HomeRoute
