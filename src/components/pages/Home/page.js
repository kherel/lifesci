import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Home')
import Hero from './Hero'
import About from './About'
import Timeline from './Timeline'
import Tweets from './Tweets'
import O_Resources from 'O_Resources'
import Contracts from './Contracts'

class Home extends Component {
  render() {

    return (
      <div className={cn()}>
        <Hero />
        <About />
        <Timeline />
        <Tweets />
        <O_Resources />
        <Contracts />

      </div>
    )
  }
}

Home.propTypes = {
};

Home.defaultProps = {
}

export default Home;

