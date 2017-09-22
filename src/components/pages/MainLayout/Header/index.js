import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Header')
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import A_Link from 'A_Link'

class Header extends Component {

  getDesktopMenu(){
    const links = nav.map( ({name, url}, i) => (
      <li key={i} className={cn('nav-item')}>
        <A_Link to={url} type='nav' >{name}</A_Link>
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
  {name: 'Contribution',  url: '#'},
  {name: 'Whitepaper', url: '/doc'},
  {name: 'Team', url: '/team'},
  {name: 'Roadmap', url: '#'},
  {name: 'Github', url: '#'},
  {name: 'Contact us', url: '#'}
]