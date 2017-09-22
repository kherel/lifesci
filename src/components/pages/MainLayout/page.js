import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import Footer from './Footer'
import Header from './Header'
import {cssClassName} from 'utils'
const cn = cssClassName('MainLayout')

class MainLayout extends Component {

  render() {
    const {children} = this.props
    return (
      <div className={cn()}>
        <Header />
        { children }
        <Footer />
      </div>
    )
  }
}


MainLayout.propTypes = {
};

MainLayout.defaultProps = {
}

export default MainLayout
