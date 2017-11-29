import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('PdfViewer')
import { PDFJS } from 'pdfjs-dist'

class PdfViewer extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    PDFJS.workerSrc = `/assets/pdf.worker.js`

    // PDFJS.disableWorker = true
    const loadingTask = PDFJS.getDocument('/pdf/Lifesci Whitepaper.pdf')

    loadingTask.promise.then(pdf => {
      const pagesArr = [...Array(pdf.numPages + 1).keys()].slice(1)
      const promises = pagesArr.map(page => pdf.getPage(page))

      promises.forEach(promise => {
        promise.then(page => {
          this.renderPage(page)
        })
      })
    })
  }

  renderPage = page => {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false })
      }, 500)

    }
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
    renderTask.then(function() {})
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

PdfViewer.propTypes = {}

PdfViewer.defaultProps = {}

export default PdfViewer
