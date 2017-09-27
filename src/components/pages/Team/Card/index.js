import React from 'react';
//import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('TeamCard')
import A_Image from 'A_Image'

const TeamCard = ({name, avatar, twitter, text, type}) =>(
  <div className={cn('card', {type})}>
    <div className={cn('card-name')}>{name}</div>
    <div className={cn('card-twitter')}>{twitter}</div>
    <div className={cn('card-text')}>{text}</div>
    <A_Image mx={cn('card-avatar')} rounded src={`/img/team/${avatar}`}/>
  </div>
)

TeamCard.propTypes = {
};

TeamCard.defaultProps = {
}
export default TeamCard