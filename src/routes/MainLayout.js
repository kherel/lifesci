import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'MainLayout/container'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'store/entities/navigation/actions'
import {fetchExchangeRates} from 'store/entities/currencies/actions'
import {fetchContracts} from 'store/entities/contracts/actions'

class MainLayoutRoute extends Component {

  static prepareData({dispatch, getState}, query, params, location) {
    dispatch(setRoute(location.pathname))
    if(initialLoad()) return;
    const state = getState()
    // return(
    //   (!state.currencies.loaded ?
    //     (dispatch(fetchExchangeRates()))
    //       : Promise.resolve())
    //     .then(
    //       !state.contracts.loaded ?
    //         (
    //           dispatch(fetchContracts('contract'))
    //           .then(dispatch(fetchContracts('placeholder')))
    //           .then(dispatch(fetchContracts('implementation')))
    //           .then(dispatch(fetchContracts('multisig')))
    //         )
    //         : Promise.resolve()
    //     )
    // )
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

