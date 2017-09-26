import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('ContactUs')
import Hero from './Hero'
import A_Container from 'A_Container'
import A_Image from 'A_Image'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Button from 'A_Button'

class ContactUs extends Component {


  render() {
    return (
      <div >
        <Hero />
        <div className={cn()}>
          <A_Container type='normal' mx={cn('inner')}>
            <section className={cn('left')}>
              <A_Image src={'/img/icons/letter.svg'} mx={cn('icon')} realSize/>
              <A_H type='section' mx={cn('title')}>General Inquires</A_H>
              <A_P type='section' mx={cn('text')}>For general queries, including partnership opportunities and investment relations please email <span className='email'>info@lifesci.io</span></A_P>
            </section>
            <section className={cn('right')}>
              <A_Image src={'/img/icons/chat.svg'} mx={cn('icon')} realSize/>
              <A_H type='section' mx={cn('title')}>Live support</A_H>
              <A_P type='section' mx={cn('text')}>If you have questions, chat live with the Lifesci team</A_P>
              <A_Button type='link-primary' to='#'>Launch chat</A_Button>
            </section>
          </A_Container>
        </div>

      </div>
    )
  }
}

ContactUs.propTypes = {
};

ContactUs.defaultProps = {
}

export default ContactUs;
