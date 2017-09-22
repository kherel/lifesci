import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Header')
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import A_Link from 'A_Link'
import MobMenu from "./MobMenu";

class Header extends Component {

  getDesktopMenu(openRoute){
    const links = nav.map( ({name, url}, i) => {
      const isOpen = openRoute[openRoute.length - 1] == url
      return(
        <li key={i} className={cn('nav-item')}>
          <A_Link
            to={`/${url}`}
            type='nav'
            disabled={isOpen}
            mx={cn('nav-link', {'is-open': isOpen})}
            children={name}
          />
        </li>
      )
    })

    return(
      <ul className={cn('nav-list')}>
        {links}
      </ul>
    )
  }

  render() {
    const {openRoute, toggleMenu, isMenuOpened} = this.props
    const desktopMenu = this.getDesktopMenu(openRoute)
    return (
      <div className={cn()}>
        <A_Container type='normal'>
          <div className={cn('nav')}>
            <M_Logo />
            {desktopMenu}
            <button className={cn('nav-menu-btn', {open: this.props.isMenuOpened})} onClick={toggleMenu}>
              Menu
            </button>
          </div>
        </A_Container>
        <MobMenu {...{openRoute, nav, isMenuOpened}}/>
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
  {name: 'Contribution',  url: '#'},
  {name: 'Whitepaper', url: 'doc'},
  {name: 'Team', url: 'team'},
  {name: 'Roadmap', url: '#'},
  {name: 'Github', url: '#'},
  {name: 'Contact us', url: '#'}
]