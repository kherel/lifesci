import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Global')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Container from 'A_Container'
import A_Image from 'A_Image'

const Global = () =>{
  return(
    <A_Container type='section' mx={cn()}>
      <div className={cn('left')}>
        <A_H type='section' mx={cn('title')}>Lifesci Global Platform </A_H>
        <A_P type='section' mx={cn('text')}>The platform includes the latest industry reports and specific data analytics in order to understand and apprehend the health sector.</A_P>

        <section className={cn('small-section')}>
          <A_H type='small-section'>Life Index Network</A_H>
          <A_P type='second'>Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token. </A_P>
        </section>
        <section className={cn('small-section')}>
          <A_H type='small-section'>Life Index Network</A_H>
          <A_P type='second'>Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token. </A_P>
        </section>
      </div>
      <div className={cn('right')}>
        <A_Image src={'/img/photo/sir-martin-evans.jpg'} alt='Sir Martin Evans' objectFit='contain' mx={cn('photo')}/>
        <div className={cn('label')}>
          <A_P type='name'>Sir Martin Evans</A_P>
          <A_P type='title'>Lifesci’s chief advisor</A_P>
        </div>
      </div>
    </A_Container>
  )
}

Global.propTypes = {
};

Global.defaultProps = {
}
export default Global