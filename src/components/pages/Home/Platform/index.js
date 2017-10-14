import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('Platform')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'

const Platform = () =>{
  return(
    <A_Container type='equal' mx={cn()}>
      <div className={cn('left')}>
        <A_H type='section' mx={cn('title')}>The Intelligence Platform</A_H>
        <A_P type='section' mx={cn('text')}>
          The platform includes the latest industry reports and specific data analytics in order to understand and apprehend the health sector.
        </A_P>

        <section className={cn('section', {icon: 'lines'})}>
          <A_H type='small-section'>Intrepreneurs and Investors</A_H>
          <A_P type='second'>Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token. </A_P>
          <div className={cn('docs')}>
            <A_P type='second' mx={cn('docs-item')}>Feature exclusive content about healthcare industry</A_P>
            <A_P type='second' mx={cn('docs-item')}>Interviews with thought leaders</A_P>
            <A_P type='second' mx={cn('docs-item')}>The Healthcare Labz interviews to spotlight the great people</A_P>
            <A_P type='second' mx={cn('docs-item')}>Bring thought-provoking ideas</A_P>
          </div>
        </section>
        <section className={cn('section', {icon: 'shield'})}>
          <A_H type='small-section'>Doctors & Healthcare Professionals</A_H>
          <A_P type='second'>Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token. </A_P>
        </section>
      </div>
      <div className={cn('right')}>
        <A_Image src={'/img/illustrations/tablet.svg'} mx={cn('illustration')}/>
        <section className={cn('section', {icon: 'note'})}>
          <A_H type='small-section'>Academics and Researchers</A_H>
          <A_P type='second'>Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token. Lifesci holds an exclusive portfolio of healthcare and life science companies. The access to these  companies will be given to the network of participants possessing the Lifesci Token. </A_P>
        </section>
      </div>
    </A_Container>
  )
}

Platform.propTypes = {
};

Platform.defaultProps = {
}
export default Platform