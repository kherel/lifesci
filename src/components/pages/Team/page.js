import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Team')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import O_Resources from 'O_Resources'
import A_P from 'A_P'

class Team extends Component {

  getCards(entities){
    const cards = entities.map(({name, avatar, twitter, position}, i) => (
      <div key={i} className={cn('card')}>
        <div className={cn('card-name')}>{name}</div>
        <div className={cn('card-twitter')}>{twitter}</div>
        <div className={cn('card-position')}>{position}</div>
        <A_Image mx={cn('card-avatar')} rounded src={`/img/team/${avatar}`}/>
      </div>

    ))
    return(
      <ul className={cn('card-list')}>
        {cards}
      </ul>
    )
  }

  renderHero = () => (
    <A_Container type='hero' mx={cn('hero')}>
      <A_H type="hero">Lifesci launched in 2016</A_H>
      <A_P type="hero">Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
    </A_Container>
  )

  renderFounders = () => (
    <A_Container type='equal'>
      <A_H type="section">Lifesci founders</A_H>
      <A_P type="section">We’re here for those who refuse to settle. Who never stop moving forwards. Who continue to search for new ideas and better experiences in everything they do.</A_P>
      {
        founders.map((obj,i) => this.renderFounder(obj, i))
      }
    </A_Container>
  )

  renderFounder = ({photo, name, position, text}, i) => (
    <div className={cn('founder')} key={i}>
      <div className={cn('founder-photo')}>
        <A_Image src={`/img/photo/${photo}`} />
      </div>
      <div className={cn('founder-info')}>
        <A_H type='section-subtitle'>{position}</A_H>
        <A_H type="section" mx={cn('founder-name')}>{name}</A_H>
        <A_P type="article-text">{text}</A_P>
      </div>

    </div>
  )

  render() {
    const teamList = this.getCards(team)
    const advisorsList = this.getCards(advisors)
    const hero = this.renderHero()
    const founders = this.renderFounders()

    return (
      <div className={cn()}>
        {hero}
        {founders}
        <A_Container type={'smart'}>
          <A_H type='main' >The Lifesci team</A_H>
          {teamList}
        </A_Container>
        <A_Container type={'smart'}>
          <A_H type='main'>The Advisors</A_H>
          {advisorsList}
        </A_Container>
        <O_Resources />
      </div>
    )
  }
}

Team.propTypes = {
};

Team.defaultProps = {
}

export default Team;

const team = [
  {name: 'Dinis Guarda', twitter: '@GR36', position:'CEO', avatar: 'dinis_guarda.jpg'},
  {name: 'Ajan Reginald', twitter: '@GR36', position:'CFO', avatar: 'no_avatar.png'},
  {name: 'Anton Mozgovoy', twitter: '@anton_mozgovoy', position:'CTO', avatar: 'anton_mozgovoy.jpg'},
  {name: 'Anca Petre', twitter: '@twitter', position:'subtitle', avatar: 'no_avatar.png'},
  {name: 'Zeeshan Malick', twitter: '@twitter', position:'subtitle', avatar: 'zeeshan_mallick.jpg'},
  {name: 'Derin Cag', twitter: '@twitter', position:'subtitle', avatar: 'derin_cag.jpg'},
]

const advisors = [
  {name: 'Sir Martin Evans', twitter: '@GR36', position:'Noble of Medicine', avatar: 'sir_martin_evans.png'},
  {name: 'Ajan Reginald', twitter: '@GR36', position:'CFO', avatar: 'no_avatar.png'},
  {name: 'Anton Mozgovoy', twitter: '@anton_mozgovoy', position:'CTO', avatar: 'no_avatar.png'},
  {name: 'Anca Petre', twitter: '@twitter', position:'subtitle', avatar: 'no_avatar.png'},
  {name: 'Zeeshan Malick', twitter: '@twitter', position:'subtitle', avatar: 'no_avatar.png'},
  {name: 'Derin Cag', twitter: '@twitter', position:'subtitle', avatar: 'no_avatar.png'}
]

const founders = [
  {
    name: 'Dinis Guarda',
    text: 'Digital age influencer Dinis is the founder of digital communications consultancy Ztudium. Dinis also co-founded BlockchainAge, a blockchain research and tech influencer, platform, book and film; led the digital strategy for invstr.com; authored books including The Next Tsunami: Blockchain plus AI and IOT and led a digital master course in London for Group INSEEC. He has been ranked as in the top 100 Blockchain and Fintech influencers.',
    position:'FOUNDER & CEO',
    photo: 'dinis-guarda.jpg'
  },
  {
    name: 'Ajan Reginald',
    text: 'Ajan Reginald is a co-founder of Celixir alongside Professor Sir Martin Evans. Ajan previously served as the Global Head of Emerging Technologies and Business Development Director at Roche. He is a former Boston Consulting Group Consultant and a Fulbright Scholar, with an MSc in Experimental Therapeutics.',
    position:'FOUNDER & CFO',
    photo: 'ajan-reginald.jpg'
  },
]