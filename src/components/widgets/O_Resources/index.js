import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeCompanies')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'

class Companies extends Component {


  render() {
    return (
      <div className={cn()}>
        <A_Container type='section'>
          <div className={cn('title')}>
            <A_H type='small'>LIFESCI WAS FEATURED AT THE FOLLOWING RESOURCES</A_H>
          </div>
          <div className={cn('companies')}>
            <A_Image src='/img/companies.png'/>
          </div>
        </A_Container>
      </div>
    )
  }
}

Companies.propTypes = {
};

Companies.defaultProps = {
}

export default Companies;