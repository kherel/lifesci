import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Header')
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import A_Link from 'A_Link'
import MobMenu from "./MobMenu";
import MenuSvgBtn from "./MenuSvgBtn";

class Header extends Component {

  getDesktopMenu(openRoute){
    const links = nav.map( ({name, url}, i) => {
      const isOpen = openRoute[openRoute.length - 1] === url
      return(
        <li key={i} className={cn('nav-item')}>
          <A_Link
            to={url}
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
        <A_Container type='normal' mx={cn('nav')}>
          <M_Logo mx={cn('logo')} color={isMenuOpened && 'white'}/>
          {desktopMenu}
          <button className={cn('nav-menu-btn', {open: isMenuOpened})} onClick={toggleMenu}>
            <MenuSvgBtn color={isMenuOpened ? 'white' : '#6D6F7B'}/>
          </button>
          {isMenuOpened && <MobMenu {...{openRoute, nav, toggleMenu}}/>}
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
  {name: 'Contribution',  url: '#'},
  {name: 'Whitepaper', url: '/whitepaper'},
  {name: 'Team', url: '/team'},
  {name: 'Roadmap', url: '/roadmap'}
]