import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Link from 'A_Link'
const cn = cssClassName('Legal')


const Legal = ({openRoute}) =>{

  const links = nav.map( ({name, url}, i) => {
    const isOpen = openRoute[openRoute.length - 1] === url.substr(1)
    return(
      <li key={i}>
        <A_Link
          to={`/legal${url}`}
          type='nav'
          disabled={isOpen}
          mx={cn('nav-link', {'is-open': isOpen})}
          children={name}
        />
      </li>
    )
  })

  return(
    <div className={cn()}>
      <A_Container type='hero' mx={cn('hero')}>
        <A_H type="hero">Legal Agreements</A_H>
        <A_P type="hero">Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
      </A_Container>
      <A_Container type='normal' mx={cn('main')}>
        <aside className={cn('menu')}>
          <A_H type='third'>Content</A_H>
          <ul className={cn('nav')} >
            {links}
          </ul>
        </aside>
      </A_Container>
    </div>
  )
}

Legal.propTypes = {
};

Legal.defaultProps = {
}
export default Legal

const nav = [
  {name: 'Business Terms of Service',  url: '/business-terms-of-service'},
  {name: 'Supplements', url: '/supplements'},
  {name: 'Complaints Policy', url: '/complaints-policy'},
  {name: 'Cookies Policy', url: '/cookies-policy'}
]