import React, {Component} from 'react'
import T from 'prop-types'
import {cssClassName} from 'utils'
import {PDFJS} from 'pdfjs-dist'
import './styles.scss'

const cn = cssClassName('PdfViewer')

class PdfViewer extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    PDFJS.workerSrc = `/assets/pdf.worker.js`

    const loadingTask = PDFJS.getDocument(this.props.fileName)

    loadingTask.promise.then(pdf => {
      const pagesArr = [...Array(pdf.numPages + 1).keys()].slice(1)
      const promises = pagesArr.map(page => pdf.getPage(page))

      promises.forEach(promise => {
        promise.then(this.renderPage)
      })
    })
  }

  renderPage = page => {
    const viewport = page.getViewport(1)
    const canvas = document.createElement('canvas')
    canvas.className = cn('canvas')
    this.node.appendChild(canvas)
    const context = canvas.getContext('2d')
    canvas.height = viewport.height
    canvas.width = viewport.width

    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    }
    const renderTask = page.render(renderContext)
    renderTask.then(() => {
      if (this.state.loading) {
        this.setState({ loading: false })
      }
    })
  }

  render() {
    const { loading } = this.state
    return (
      <div className={cn()} ref={node => (this.node = node)}>
        {loading && <p className={cn('loader')}>PDF is loading...</p>}
      </div>
    )
  }
}

PdfViewer.propTypes = {
  fileName: T.string.isRequired,
}

PdfViewer.defaultProps = {}

export default PdfViewer
