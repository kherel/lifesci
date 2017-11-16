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
    <A_P type="hero">Following the spirit of transparency, we try to keep all our thoughts on the paper shared with our life science community. We also try to maintain the latest version of the documents live and updated. </A_P>
  </A_Container>
)

DocumentHero.propTypes = {
};

DocumentHero.defaultProps = {
}
export default DocumentHero