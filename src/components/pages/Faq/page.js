import React, { Component } from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Faq')
import A_Container from 'A_Container'
import Search from './Search'
import Catalog from './Catalog'
import Results from './Results'

class Faq extends Component {
  state = {
    search: '',
    // scrollTo: data.catalog[0].name,
    // scrollValue: data.catalog[0].name
  }

  render() {
    const { search, scrollTo } = this.state
    return (
      <div>
        <A_Container type="normal" mx={cn('hero')}>
          <Search
            handleChange={search => this.setState({ search })}
            handleReset={() => this.setState({ search: '' })}
            value={this.state.search}
            placeholder={'Have a question? Enter a search term here… '}
          />
        </A_Container>
        {search === '' ? (
          <Catalog
            catalog={data}
            scrollTo={scrollTo}
            setScrollValue={value => this.setState({ value })}
          />
        ) : (
          <Results entities={data.entities} search={search} />
        )}
      </div>
    )
  }
}

Faq.propTypes = {}

Faq.defaultProps = {}

const data = {
  catalog: [
    {
      name: 'Common FAQ’s',
      slugs: [
        'What is Lifesci?',
        'What stage is the product in?',
        'Where is the project roadmap?',
        'Which blockchains the Lifesci compatible with?',
        "Won't the limited scalability of current-day blockchains prevent Lifesci from working?",
        'How can I get involved?',
      ],
    },
    {
      name: 'Regulation',
      slugs: [
        'Are Lifesci tokens securities?',
        'Why do you exclude citizens of the USA and China?',
      ],
    },
    {
      name: 'Funds',
      slugs: ['What is the role of LSCI token?', 'Can I mine LSCI tokens?'],
    },
    {
      name: 'Crowdsale',
      slugs: [
        'How do I participate in the pre-crowdsale period?',
        'Who has access to the contributions and manages the project?',
        'Which currencies are accepted?',
        'What is the name and symbol of the project token?',
        'Will there be a lockdown period for Tokens created?',
        'Why is there a 5,000 EUR minimum contribution?',
        'Why maximum token supply is only 23M LSCI?',
      ],
    },
  ],
  entities: {
    'What is Lifesci?': `
      <p>Lifesci will be designed as an Artificial Intelligence powered, Blockchain platform that creates new healthcare solutions by enabling and connecting innovation, ideas, services and capital from online communities, scientists, startups and investors. Thereby creating a unique platform that combines integrated data science (machine learning + life science experts) with capital.</p></br>
      <p>Lifesci is led by an experienced  team from across Healthcare, Blockchain, AI, Big data and Digital sectors. The scientific project is partnered with Celixir plc - a leading regenerative medicine company led by Sir Martin Evans Nobel Laureate in Medicine in 2007.</p>`,
    'What stage is the product in?':
      'The project initially started after the SEC announcement with a clear statement to make sure that new projects and platforms will not fall under regulatory problems. Lifesci platform has been entirely self-funded by the Team and is 100% owned by the team. Please check our roadmap, to review the current stage of the development process.',
    'Where is the project roadmap?': `
      <p>The project roadmap is described in the dedicated section on our website - <a href="/roadmap" target="_blank ">Project Roadmap</a></p>
    `,
    'Which blockchains the Lifesci compatible with?':
      'Lifesci will blockchain agnostic, and will be able to operate alongside any smart contract platform in the future. We will begin by supporting Ethereum, because it is available and production-ready.',
    "Won't the limited scalability of current-day blockchains prevent Lifesci from working?": `
      <p>Lifesci will be designed as an Artificial Intelligence powered, Blockchain platform that creates new healthcare solutions by enabling and connecting innovation, ideas, services and capital from online communities, scientists, startups and investors. Thereby creating a unique platform that combines integrated data science (machine learning + life science experts) with capital.</p></br>
      <p>Lifesci is led by an experienced  team from across Healthcare, Blockchain, AI, Big data and Digital sectors. The scientific project is partnered with Celixir plc - a leading regenerative medicine company led by Sir Martin Evans Nobel Laureate in Medicine in 2007.</p>`,
    'How can I get involved?':
      'Lifesci will be an open source project which will benefit from proposals and code from passionate developers worldwide, moreover the community will be fully involved on the Lifesci platform.',
    'Are Lifesci tokens securities?':
      'Based on legal advice and opinions we gathered during the preparation process, LSCI tokens would  be deemed as securities by SEC based on the famous Howey test. We pay a lot of attention to that matter and are in continuous communications with US attorneys while formalising our position.',
    'Why do you exclude citizens of the USA and China?':
      'China citizens are excluded due to China’s central bank regulation, while the USA residents are excluded due to the SEC regulatory warnings.',
    'Can I mine LSCI tokens?':
      'No. LSCI token will not be minable, it will be distributed through the model described during the 4 phases of the crowdsale process.',
    'How do I participate in the pre-crowdsale period?': `
      <p>For transparency, in the following section we would like to disclose some information about the private pre-contribution period. Private contributions include early contributions and strategic contributions. Both are important for the project, but for different reasons. Early contributions guarantee that the project has enough early funding to make it as far as the public contribution periods. Strategic contributions ensure that the project has long-term supporters whose interests are aligned with the project. This includes, for example, funds, partners, and well-connected individuals.</p></br>
      <p>Around half of the funding target comes from large contributors and early supporters, and they are onboarded separately outside the public contribution periods. This way we prevent them from eating up all tokens during the public contribution periods, allowing smaller contributors a better chance to participate in them. Doing so also allows us to set a stricter contribution cap on the public periods, which helps maximize token distribution. Last but not least, this way we know who the biggest token holders are, and get to select who we want to work with, making sure they are long-term supporters of the project. Most of the private contributors have been introduced to us by people we trust.</p>,`,
    'Who has access to the contributions and manages the project?':
      'Lifesci Foundation, a public foundation incorporated in the Gibraltar, will control the funds and coordinate and manage the implementation of the project.',
    'Which currencies are accepted?': 'BTC, ETH, and the main fiat currencies.',
    'What is the name and symbol of the project token?': `
      <p>The project token is the Lifesci LSCI token, and its symbol is LSCI. The token is an ERC20 standard token on the Ethereum blockchain. It is already deployed here, and should appear automatically in at least <a href="https://www.myetherwallet.com/" target="_blank">MyEtherWallet</a> and <a href="https://parity.io/" target="_blank">Parity</a> wallets.</p>    
    `,
    'Will there be a lockdown period for Tokens created?':
      'LSCI tokens will be transferable a few weeks after the end of the crowd contribution period. Tokens reserved for the team are subject to a vesting contract.',
    'Why is there a 5,000 EUR minimum contribution?':
      'KYC and AML processes are very expensive and require time, that is why to comply with all regulatory requirements, Lifesci has limited minimum contributions to a 5,000 EUR.',
    'Why maximum token supply is only 23M LSCI?':
      'Lifesci is all about life science, and life stands for the DNA. Human beings have 23 DNA pairs, that is why the team has decided to tie LSCI tokens to the base of everything - the number of DNA pairs.',
  },
}

export default Faq
