import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Footer')
import A_Container from 'A_Container'
import A_Image from 'A_Image'
import {convert} from 'utils'
import A_Link from 'A_Link'

class Footer extends Component {

  getSocial(){
    const socialButtons = social.map(icon => (
      <li className={cn('social-icon')} key={icon}>
        <A_Image src={`/img/icons/${icon}.svg`} realSize/>
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
    const links = nav.map( name => (
      <li key={name} className={cn('nav-item')}>
        <A_Link to={convert.toCleanKebab(name)} type='nav' >{name}</A_Link>
      </li>
    ))

    return(
      <ul className={cn('nav-list')}>
        {links}
      </ul>
    )
  }


  render() {
    const navigation = this.getNavigation()

    return (
      <div >
        <A_Container type='normal'>
          <div className={cn('slogan')}>
            <div>SHARE YOUR <span>❤</span>, MAKE THE WORLD A BETTER PLACE!</div>
          </div>
          {this.getSocial()}
        </A_Container>
        <nav className={cn('nav')}>

          <A_Container type='normal' mx={cn('nav-container')}>
            <div className={cn('copyright')}>© 2017 Lifesci LLC</div>
            {navigation}
          </A_Container>
        </nav>

      </div>
    )
  }
}

Footer.propTypes = {
};

Footer.defaultProps = {
}

export default Footer;

const social = [
  'tweet',
  'slack',
  'fb',
  'reddit',
  'medium'
]

const nav = [
  'Contribution',
  'Whitepaper',
  'Team',
  'Roadmap',
  'Github',
  'Contact us'
]