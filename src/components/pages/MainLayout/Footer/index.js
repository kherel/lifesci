import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Footer')
import A_Container from 'A_Container'
import A_Image from 'A_Image'
import A_Link from 'A_Link'

class Footer extends Component {

  getSocial(){
    const socialButtons = social.map(({name}) => (
      <li className={cn('social-icon')} key={name}>
        <A_Image src={`img/icons/${name}.svg`} realSize/>
      </li>
      )
    )
    return(
      <ul className={cn('social-list')}>
        {socialButtons}
      </ul>
    )
  }

  getNavigation(){
    const links = nav.map( ({name, url}) => (
      <li key={name} className={cn('nav-item')}>
        <A_Link to={`${url}`} type='nav' >{name}</A_Link>
      </li>
    ))

    return(
      <ul className={cn('nav')}>
        {links}
      </ul>
    )
  }

  getExtraNavigation(){
    return(
      extra.map( ({name, url}) => (
        <div key={name} className={cn('footer-nav-item')}>
          <A_Link to={`${url}`} type='nav' >{name}</A_Link>
        </div>
      ))
    )
  }

  getSocialBtns(){
    return(
      social.map( ({name, url}, i) => (
        <A_Link src={url} external key={i} mx={cn('footer-social-link')}>
          <img src={`/img/icons/${name}.svg`} alt={name} className={cn('footer-social-icon')}/>
        </A_Link>
      ))
    )
  }
  render() {
    const navigation = this.getNavigation()
    const extraNavigation = this.getExtraNavigation()
    const socialBtns = this.getSocialBtns()


    return (
      <footer >
        <A_Container type='normal'  mx={cn('header')}>
          <A_Image src={'/img/icons/lifesci.svg'} alt={'logo'} mx={cn('header-img')}/>
          <address className={cn('header-address')}>
            Lifesci Research & Development GmbH<br/>
            Baareerstrasse 10<br/>
            Zug, Switzerland<br/>
          </address>
          <aside className={cn('header-aside')}>
            <header className={cn('header-aside-title')}>Resources</header>
            <nav>
              {navigation}
            </nav>
          </aside>
        </A_Container>
        <div className={cn('footer')}>
          <A_Container type='normal' mx={cn('footer-container')}>
            <nav className={cn('footer-nav')}>{extraNavigation}</nav>
            <nav className={cn('footer-social')}>{socialBtns}</nav>
          </A_Container>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
};

Footer.defaultProps = {
}

export default Footer;

const social = [
  {name: 'telegram',  url: '/#'},
  {name: 'slack', url: '/#'},
  {name: 'fb', url: '/#'},
  {name: 'twitter', url: '/#'},
  {name: 'bitcoin', url: '/#'}
]

const nav = [
  {name: 'Contribution',  url: '/#'},
  {name: 'Whitepaper', url: '/doc'},
  {name: 'Team', url: 'team'},
  {name: 'Roadmap', url: '/#'},
  {name: 'Github', url: '/#'}
]

const extra = [
  {name: 'Privacy & Terms',  url: '/#'},
  {name: 'Contact Us', url: '/contact-us'}
]