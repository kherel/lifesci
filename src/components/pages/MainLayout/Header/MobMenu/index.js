import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Link from 'A_Link'
const cn = cssClassName('MobMenu')

const MobMenu = ({nav, isMenuOpened, openRoute}) =>{

  const links = nav.map( ({name, url}, i) => {
    const isOpen = openRoute[openRoute.length - 1] === url
    return (
      <li key={i} className={cn('nav-item')}>
        <A_Link
          to={`/${url}`}
          type='nav'
          disabled={isOpen}
          mx={cn('nav-link', {'is-open': isOpen})}
        >{name}</A_Link>
      </li>
    )
  })

  return(
    <div className={cn({show: isMenuOpened})}>
      <ul className={cn('nav-list')}>
        {links}
      </ul>
    </div>
  )
}

MobMenu.propTypes = {
};

MobMenu.defaultProps = {
}
export default MobMenu