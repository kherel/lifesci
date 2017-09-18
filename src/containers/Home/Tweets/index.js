import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeTweets')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'

class Tweets extends Component {

  getList(){
    return (listData.map(({name, nickName, tweetText},i) => (
      <li key={i} className={cn('tweet-item')}>
        <header className={cn('tweet-item-header')}>
          <div className={cn('tweet-item-image')} />
          <div className={cn('user')}>
            <div className={cn('user-name')}>{name}</div>
            <div className={cn('user-nick')}>{nickName}</div>
          </div>
        </header>
        <A_P type='tweet'>{tweetText}</A_P>
      </li>
    )))
  }

  render() {
    const list = this.getList()
    return (
      <div className={cn()}>
        <A_Container type='section'>
          <div className={cn('title')}>
            <A_H type='title'>See what people are saying Tweets Lifesci</A_H>
          </div>
          <ul className={cn('tweet-list')}>
            <li className={cn('tweet-illustration')}>
              <A_Image src={`/img/tweets_section.svg`} realSize/>
            </li>
            {list}
          </ul>
        </A_Container>
      </div>
    )
  }
}

Tweets.propTypes = {
};

Tweets.defaultProps = {
}

export default Tweets;

const listData = [
  {
    name: 'Greg',
    nickName: '@GR36',
    tweetText: 'There is something that I like about @Lifesci and I want to share with everyone on Twitter. I like to say various things, and I’m saying them.'
  },
  {
    name: 'Greg',
    nickName: '@GR36',
    tweetText: 'There is something that I like about @Lifesci and I want to share with everyone on Twitter. I like to say various things, and I’m saying them.'
  },
  {
    name: 'Greg',
    nickName: '@GR36',
    tweetText: 'There is something that I like about @Lifesci and I want to share with everyone on Twitter. I like to say various things, and I’m saying them.'
  }
]