import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Read')
import A_Container from 'A_Container'

class Read extends Component {
  state = {
    numPages: null,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages })
  }

  renderDocument = () => {
    const { Document, Page } = require('react-pdf/build/entry.noworker')
    return (
      <Document file="pdf/Lifesci Whitepaper.pdf" onLoadSuccess={this.onDocumentLoad} loading="Document is loading...">
        {Array.from(new Array(this.state.numPages), (el, index) => (
          <Page
            className={cn('page')}
            key={`page_${index + 1}`}
            renderTextLayer={false}
            pageNumber={index + 1}
          />
        ))}
      </Document>
    )
  }

  render() {
    return (
      <div className={cn()}>
        <A_Container type="normal" mx={cn('main')}>
          {__CLIENT__ ? this.renderDocument() : ''}
        </A_Container>
      </div>
    )
  }
}

Read.propTypes = {}

Read.defaultProps = {}

export default Read
