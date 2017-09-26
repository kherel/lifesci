import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('DocumentHero')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'

const DocumentHero = () =>(
  <A_Container type='hero' mx={cn()}>
    <A_H type="hero">Relevant Documents</A_H>
    <A_P type="hero">Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
  </A_Container>
)

DocumentHero.propTypes = {
};

DocumentHero.defaultProps = {
}
export default DocumentHero