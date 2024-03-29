import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('HomeContracts')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Button from 'A_Button'
import A_Link from 'A_Link'

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import codeStyle from './code-style.js'

registerLanguage('javascript', js)

class Contracts extends Component {
  state = {
    slug: 'contract',
  }

  handleOpen = slug => {
    this.setState({ slug })
  }

  getDesktopMenu(openedSlug) {
    const renderedButtons = buttons.map(({ name, slug }, i) => (
      <li key={i}>
        <A_Button
          onClick={() => this.handleOpen(slug)}
          type="button-interface"
          mx={cn('link', { opened: slug === openedSlug })}
        >
          {name}
        </A_Button>
      </li>
    ))
    return (
      <ul className={cn('list-desktop')}>
        {renderedButtons}
        <li>
          <div className={cn('line')} />
        </li>
        <li>
          <A_Link type="simple" external to={'https://github.com/amozgov'}>
            Check our Github
          </A_Link>
        </li>
      </ul>
    )
  }

  render() {
    const { slug } = this.state
    const { contracts, loaded } = this.props
    const code = contracts[slug]
    return (
      <div className={cn('wrapper')}>
        <A_Container type="equal" mx={cn()}>
          <div className={cn('code')}>
            <SyntaxHighlighter showLineNumbers wrapLines={true} style={codeStyle}>
              {!loaded ? 'loading..' : code}
            </SyntaxHighlighter>
          </div>
          <div className={cn('menu')}>
            <A_H type="second" mx={cn('title')}>
              Smart Contracts
            </A_H>
            {this.getDesktopMenu(slug)}
          </div>
        </A_Container>
      </div>
    )
  }
}

Contracts.propTypes = {}

Contracts.defaultProps = {}

export default Contracts

const buttons = [
  { name: 'LSCI token contract', slug: 'contract' },
  { name: 'Lifesci placeholder', slug: 'placeholder' },
  { name: 'Token implementation', slug: 'implementation' },
  { name: 'ConsenSys multisig', slug: 'multisig' },
]
