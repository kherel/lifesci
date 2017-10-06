import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'MainLayout/container'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'store/entities/navigation/actions'
import {fetchExchangeRates} from 'store/entities/currencies/actions'

class MainLayoutRoute extends Component {

  static prepareData({dispatch, getState}, query, params, location) {
    dispatch(setRoute(location.pathname))
    if(initialLoad()) return;
    return(
      dispatch(fetchExchangeRates())
    )
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

