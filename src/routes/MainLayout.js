import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'MainLayout/container'

class MainLayoutRoute extends Component {

  render() {
    return (
      <MainLayoutContainer>
        {this.props.children}
      </MainLayoutContainer>
    )
  }
}

MainLayoutRoute.propTypes = {
  children: T.any.isRequired
};

export default MainLayoutRoute;

