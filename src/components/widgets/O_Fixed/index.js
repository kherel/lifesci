import React, { Component, cloneElement } from 'react'
import * as T from 'prop-types'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('O_Fixed')
import { oneChild } from 'utils/propsValidationHelpers.js'
import { universalChildrenOnly } from 'utils/reactApiHelpers.js'

class O_Fixed extends Component {
  state = {
    sticky: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
  }

  handleScroll = () => {
    if (this.state.sticky && this.root.getBoundingClientRect().top > this.props.top) {
      this.setState({ sticky: false })
    } else if (!this.state.sticky && this.root.getBoundingClientRect().top < this.props.top) {
      this.setState({ sticky: true })
    }
  }

  render() {
    const { sticky } = this.state
    const { children, mx, disabled } = this.props
    const newClassName = cn({ sticky: !disabled && sticky, bottom: disabled }, [children.props.className])
    const _newChild = cloneElement(universalChildrenOnly(children), { className: newClassName })

    return (
      <div ref={node => (this.root = node)} className={mx}>
        {_newChild}
      </div>
    )
  }
}

O_Fixed.propTypes = {
  children: oneChild.isRequired, // should be only one element array or a node(string, jsx, ...etc)
  top: T.number, // top offset
}

O_Fixed.defaultProps = {
  top: 0,
}

export default O_Fixed
