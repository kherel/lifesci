import React, { Component } from 'react'
import { cssClassName } from 'utils'
const cn = cssClassName('FourOhFour')
import A_Container from 'A_Container'
import A_Button from 'A_Button'
import './styles.scss'

class FourOhFour extends Component {
  render() {
    return (
      <div className={cn()}>
        <A_Container type="normal">
          <p className={cn('error')}>404 error</p>
          <p className={cn('title')}>Page not found</p>
          <p className={cn('message')}>
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? Be
            sure to check your spelling.
          </p>
          <A_Button mx={cn('link')} type="link-primary">
            Return home
          </A_Button>
        </A_Container>
      </div>
    )
  }
}

FourOhFour.propTypes = {}

FourOhFour.defaultProps = {}

export default FourOhFour
