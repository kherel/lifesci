import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Team')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import A_P from 'A_P'
import Press from 'O_Press'

class Team extends Component {

  getCards(entities, type){
    const cards = entities.map(({name, avatar, twitter, text}, i) => (
      <div key={i} className={cn('card', {type})}>
        <div className={cn('card-name')}>{name}</div>
        <div className={cn('card-twitter')}>{twitter}</div>
        <div className={cn('card-text')}>{text}</div>
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
    const teamList = this.getCards(team, 'team')
    const advisorsList = this.getCards(advisors, 'advisors')
    const hero = this.renderHero()
    const founders = this.renderFounders()

    return (
      <div className={cn()}>
        {hero}
        {founders}
        <div className={cn('team')}>
          <A_Container type={'smart'}>
            <A_H type='section' mx={cn('team-title')}>The Lifesci team</A_H>
            <A_P type="section">We’re here for those who refuse to settle. Who never stop moving forwards. Who continue to search for new ideas and better experiences in everything they do.</A_P>
            {teamList}
          </A_Container>
        </div>

        <A_Container type={'smart'}>
          <A_H type='section'>The Advisors</A_H>
          <A_P type="section">We’re here for those who refuse to settle. Who never stop moving forwards. Who continue to search for new ideas and better experiences in everything they do.</A_P>
          {advisorsList}
        </A_Container>
        <Press />
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
  {name: 'Anton Mozgovoy', twitter: '@anton_mozgovoy', text:'CTO', avatar: 'anton_mozgovoy.jpg'},
  {name: 'Kherel Kechil', twitter: '@GR36', text:'VP Technology', avatar: 'no_avatar.png'},
  {name: 'Anca Petre', twitter: '@twitter', text:'subtitle', avatar: 'no_avatar.png'},
  {name: 'Zeeshan Malick', twitter: '@twitter', text:'subtitle', avatar: 'zeeshan_mallick.jpg'},
  {name: 'Derin Cag', twitter: '@twitter', text:'subtitle', avatar: 'derin_cag.jpg'},
  {name: 'Derin Cag', twitter: '@twitter', text:'subtitle', avatar: 'no_avatar.png'},

]

const advisors = [
  {name: 'Anton Mozgovoy', twitter: '@anton_mozgovoy', avatar: 'anton_mozgovoy.jpg', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'},
  {name: 'Kherel Kechil', twitter: '@GR36', avatar: 'no_avatar.png', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'},
  {name: 'Anca Petre', twitter: '@twitter', avatar: 'no_avatar.png', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'},
  {name: 'Zeeshan Malick', twitter: '@twitter', avatar: 'zeeshan_mallick.jpg', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'},
  {name: 'Derin Cag', twitter: '@twitter', avatar: 'derin_cag.jpg', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'},
  {name: 'Derin Cag', twitter: '@twitter', avatar: 'no_avatar.png', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'},
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