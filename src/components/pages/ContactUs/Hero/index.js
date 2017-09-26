import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('ContactUsHero')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'

const ContactUsHero = () =>(
  <A_Container type='hero' mx={cn()}>
    <A_H type="hero">Contact us</A_H>
    <A_P type="hero">Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
  </A_Container>
)

ContactUsHero.propTypes = {
};

ContactUsHero.defaultProps = {
}
export default ContactUsHero