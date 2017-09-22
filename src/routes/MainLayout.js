import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'MainLayout/container'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'store/entities/navigation/actions'

class MainLayoutRoute extends Component {

  static prepareData({dispatch, getState}, query, params, location) {
    if(initialLoad()) return;
    dispatch(setRoute(location.pathname))
  }

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

