import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('FourOhFour')
import A_Container from 'A_Container'
import { Link } from 'react-router'

class FourOhFour extends Component {
  render() {
    return (
      <A_Container type="normal" mx={cn()}>
        <p className={cn('message')}>This page doesn't exist</p>
        <Link to="/" className={cn('link')}>Home page</Link>
      </A_Container>
    )
  }
}

FourOhFour.propTypes = {}

FourOhFour.defaultProps = {}

export default FourOhFour
