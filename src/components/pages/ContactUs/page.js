import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('ContactUs')
import Hero from './Hero'
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'

class ContactUs extends Component {

  render() {
    return (
      <div className={cn()}>
        <Hero />
        <A_Container type='normal'>
          те
        </A_Container>
      </div>
    )
  }
}

ContactUs.propTypes = {
};

ContactUs.defaultProps = {
}

export default ContactUs;