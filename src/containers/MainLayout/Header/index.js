import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Header')
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import {convert} from 'utils'
import A_Link from 'A_Link'

class Header extends Component {

  getNavigation(){
    const links = nav.map( name => (
      <li key={name}>
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
      <div className={cn()}>
        <div className={cn('root')}>
          <A_Container type='normal'>
            <nav className={cn('nav')}>
              <M_Logo />
              {navigation}
            </nav>
          </A_Container>
        </div>
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