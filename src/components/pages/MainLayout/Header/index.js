import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Header')
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import {convert} from 'utils'
import A_Link from 'A_Link'

class Header extends Component {

  getDesktopMenu(){
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
  getMobMenu(){
    return(
      <div className={cn('nav-menu-btn')}>
        Menu
      </div>
    )
  }

  render() {
    const desktopMenu = this.getDesktopMenu()
    const mobMenu = this.getMobMenu()

    return (
      <div className={cn()}>
        <A_Container type='normal'>
          <div className={cn('nav')}>
            <M_Logo />
            {desktopMenu}
            {mobMenu}
          </div>
        </A_Container>
      </div>
    )
  }
}

Header.propTypes = {
};

Header.defaultProps = {
}

export default Header;

const nav = [
  'Contribution',
  'Whitepaper',
  'Team',
  'Roadmap',
  'Github',
  'Contact us'
]