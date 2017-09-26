import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Home')
import Hero from './Hero'
// import Timeline from './Timeline'
import Tweets from './Tweets'
import Platform from './Platform'
import Global from './Global'
import Press from './Press'
import Subscribe from './Subscribe'

class Home extends Component {
  render() {

    return (
      <div className={cn()}>
        <Hero />
        <Subscribe handleSubmit={v => console.log(v)}/>
        <Platform />
        <Tweets />
        <Global />
        <Press />
      </div>
    )
  }
}

Home.propTypes = {
};

Home.defaultProps = {
}

export default Home;

