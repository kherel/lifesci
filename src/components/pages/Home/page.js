import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Home')
import Hero from './Hero'
import Tweets from './Tweets'
import Platform from './Platform'
import Global from './Global'
import Press from 'O_Press'
import Subscribe from './Subscribe'
import About from "./About";

class Home extends Component {
  render() {

    return (
      <div className={cn()}>
        <Hero />
        <About />
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

