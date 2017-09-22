import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Team')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import O_Resources from 'O_Resources'
import M_Hero from 'M_Hero'
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
    <M_Hero>
      <A_Container type='normal'>
        <A_H type="hero">About us</A_H>
        <A_P type="hero">The team behind the Lifesci platform is blah blah  and is based in the London, Uk. Most of the team is remote and spread across the world.</A_P>
      </A_Container>
    </M_Hero>
  )

  render() {
    const teamList = this.getCards(team)
    const advisorsList = this.getCards(advisors)
    const hero = this.renderHero()

    return (
      <div className={cn()}>
        {hero}
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
