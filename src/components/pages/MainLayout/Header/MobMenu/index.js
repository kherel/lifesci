import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Link from 'A_Link'
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import A_Image from 'A_Image'
const cn = cssClassName('MobMenu')
import MenuSvgBtn from '../MenuSvgBtn'

class MobMenu extends Component {

  componentDidMount(){
    window.onscroll = window.ontouchmove = window.onwheel = (e) => { e.preventDefault(); }
  }
  componentWillUnmount(){
    window.onscroll = window.ontouchmove = window.onwheel = () => true
  }

  getLinks(nav, openRoute){
    return(
      nav.map( ({name, url}, i) => {
        const isOpen = openRoute[openRoute.length - 1] === url
        return (
          <li key={i} className={cn('nav-item')}>
            <A_Link
              to={`/${url}`}
              disabled={isOpen}
              mx={cn('nav-link', {'is-open': isOpen})}
            >{name}</A_Link>
          </li>
        )
      })
    )
  }

  render() {
    const {openRoute, nav, isMenuOpened, toggleMenu} = this.props

    const links = this.getLinks(nav, openRoute)
    return (
      <div className={cn({show: isMenuOpened})}>
        <div className={cn('container')} />

        <ul className={cn('nav-list')}>
          {links}
        </ul>
      </div>
    )
  }
}

MobMenu.propTypes = {
};

MobMenu.defaultProps = {
}

export default MobMenu