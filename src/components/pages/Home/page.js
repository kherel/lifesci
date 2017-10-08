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
import scrollToComponent from 'react-scroll-to-component';

class Home extends Component {
  render() {

    return (
      <div className={cn()}>
        <Hero handleClick={() => scrollToComponent(this.subscribe, { offset: 0, align: 'top', duration: 1500})}/>
        <About />
        <Subscribe handleSubmit={v => console.log(v)} ref={node => this.subscribe = node}/>
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

