import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Link from 'A_Link'
import A_Container from 'A_Container'
import M_Logo from 'M_Logo'
import A_Image from 'A_Image'
const cn = cssClassName('MobMenu')
import {Motion, spring, presets} from 'react-motion'
import Helmet from 'react-helmet'
class MobMenu extends Component {

  getLinks(nav, openRoute){
    return(
      nav.map( ({name, url}, i) => {
        const isOpen = openRoute[openRoute.length - 1] === url
        return (
          <li key={i} className={cn('nav-item')}>
            <A_Link
              to={url}
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
        <Motion defaultStyle={{x: 100}} style={{x: spring(isMenuOpened ? 100 : 0, presets.stiff)}}>
          {({x}) =>
            <div className={cn()} style={{transform: `translate3d(${x}%, 0, 0)`}}>
              <Helmet>
                <style type="text/css">{`html {overflow: hidden !important;}`}</style>
              </Helmet>
              <ul className={cn('nav-list')}>
                {links}
              </ul>
              <A_Image src={'/img/common/mob-menu-bg.svg'} mx={cn('bg')}/>
            </div>
          }
        </Motion>
    )
  }
}

MobMenu.propTypes = {
};

MobMenu.defaultProps = {
}

export default MobMenu