import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Roadmap')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Button from 'A_Button'
import update from 'immutability-helper'

class Roadmap extends Component {
  state = {
    open: {},
  }

  toggleOpen = i => {
    const openObjKey = `item${i}`
    const newValue = !this.state.open[openObjKey]
    const newState = update(this.state, { open: { [openObjKey]: { $set: newValue } } })
    this.setState(newState)
  }

  getList = () =>
    listData.map(({ title, subtitle, type, description, list }, i) => {
      const sublist = list.map((item, i) => (
        <li key={i} className={cn('additional-item')}>
          {item}
        </li>
      ))
      const close = !this.state.open[`item${i}`]
      return (
        <div key={i} className={cn('period-wrapper')}>
          <A_Container key={i} type="normal" mx={cn('period-item')}>
            <div className={cn('main')}>
              <A_H type="title" mx={cn('main-title')}>
                {title}
              </A_H>
              <A_H type="subtitle" mx={cn('main-subtitle')}>
                {subtitle}
              </A_H>
              <div className={cn('main-description')}>
                <A_P type="description">
                  <span className={cn('main-title-bold')}>{type} </span>
                  {description}
                </A_P>
              </div>
            </div>
            <div className={cn('additional')}>
              <div className={cn('additional-hidden', { close })}>
                <A_H type="third" mx={cn('additional-title')}>
                  {type}
                </A_H>
                <ul>{sublist}</ul>
              </div>
              {close && [
                <div
                  key={1}
                  className={cn('additional-view-line')}
                  onClick={() => this.toggleOpen(i)}
                >
                  <span>View all</span>
                </div>,
                <A_Button
                  key={2}
                  type="button-secondary"
                  mx={cn('additional-view-line-btn')}
                  onClick={() => this.toggleOpen(i)}
                >
                  View all
                </A_Button>,
              ]}
            </div>
          </A_Container>
        </div>
      )
    })

  render() {
    const list = this.getList()
    return (
      <div className={cn()}>
        <A_Container type="hero">
          <A_H type="hero">Development Roadmap</A_H>
          <A_P type="hero">
            We believe technology should get out of the way, so there’s no limit to what people can
            do. We’re a thoughtful, tightly-knit team that’s committed to realising ambitious ideas.
          </A_P>
        </A_Container>
        {list}
      </div>
    )
  }
}

Roadmap.propTypes = {}

Roadmap.defaultProps = {}

export default Roadmap

const listData = [
  {
    title: 'Q4 2017',
    subtitle: 'OCTOBER - DECEMBER, 2017',
    type: 'Digital Identity Directory',
    description: '',
    list: [
      'Dynamic page with comprehensive local and global listings of Medtech, life science organisations and foundations, with search filters',
      'Infographics and data on organisations',
      'AI Smart Contract proof of identity',
      'Iterative Machine Learning Curve',
      'Mainnet Beta',
      'Privacy Features',
      'PaaS Draft',
    ],
  },
  {
    title: 'Q1 2018',
    subtitle: 'JANUARY - MARCH, 2018',
    type: 'Data Rankings',
    description: '',
    list: [
      'Private and public profile',
      'B2B community based in P2P insights',
      'Social media dashboard data visualisation integration',
      'Blogs, newsletters, curated content, intelligence collaboration content',
      'Lifesci Platform security audit and product launch',
      'Swarm Support',
      'PaaS Testing',
    ],
  },
  {
    title: 'Q2 2018',
    subtitle: 'APRIL - JUNE, 2018',
    type: 'Resource Center',
    description: '',
    list: [
      'CRM & Data Science Analytics',
      'Match organisations & E Commerce features',
      'Global geotargeting and localised edition',
      'Automated process of subscription',
      'Global Teller Network',
      'Adhoc Mesh Networking',
      'PaaS Cloud',
    ],
  },
  {
    title: 'Q3 2018',
    subtitle: 'APRIL - JUNE, 2018',
    type: 'Global Marketplace',
    description: '',
    list: [
      'Global supply chain network and DBs accessibility by community',
      'Crowdfunding campaigns to support new Medtech projects',
      'Campaigns for crowd engagement and joint ventures',
      'Scalable marketplace based on P2P digital currencies',
      'Double Ratchet',
    ],
  },
]
