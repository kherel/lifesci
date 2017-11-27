import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Read')
import A_Container from 'A_Container'
const { Document, Page } = require(__CLIENT__
  ? 'react-pdf/build/entry.webpack'
  : 'react-pdf/build/entry.noworker')


class Read extends Component {
  state = {
    numPages: null,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { numPages } = this.state

    return (
      <div className={cn()}>
        <A_Container type="normal" mx={cn('main')}>
          <Document file="pdf/Lifesci Whitepaper.pdf" onLoadSuccess={this.onDocumentLoad}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                className="read__page"
                key={`page_${index + 1}`}
                renderTextLayer={false}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </A_Container>
      </div>
    )
  }
}

Read.propTypes = {}

Read.defaultProps = {}

export default Read
