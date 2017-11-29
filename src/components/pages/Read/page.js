import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Read')
import A_Container from 'A_Container'
import PDFViewer from './PdfViewer/index'

class Read extends Component {

  render() {
    return (
      <div className={cn()}>
        <A_Container type="normal" mx={cn('main')}>
          {__CLIENT__ && <PDFViewer />}
        </A_Container>
      </div>
    )
  }
}

Read.propTypes = {}

Read.defaultProps = {}

export default Read
