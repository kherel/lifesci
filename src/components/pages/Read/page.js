import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Read')
// import A_Container from 'A_Container'

class Read extends Component {


  render() {
    return (
      <div className={cn()}>
        <object className={cn('object')} type="application/pdf" data="/pdf/Lifesci Whitepaper.pdf" id="pdf_content">
          <embed src="/pdf/Lifesci Whitepaper.pdf" type="application/pdf" />
        </object>
        {/*<embed className={cn('object')} src="/pdf/Lifesci Whitepaper.pdf" type="application/pdf" />*/}
        {/*<iframe className={cn('object')} src="/pdf/Lifesci Whitepaper.pdf" />*/}
      </div>
    )
  }
}

Read.propTypes = {}

Read.defaultProps = {}

export default Read
