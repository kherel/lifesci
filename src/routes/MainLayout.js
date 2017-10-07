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
    return(
      dispatch(fetchExchangeRates())
        .then(dispatch(fetchContracts('contract')))
        .then(dispatch(fetchContracts('placeholder')))
        .then(dispatch(fetchContracts('implementation')))
        .then(dispatch(fetchContracts('multisig')))
    )
  }

  // const buttons = [
  //   {name:'LSCI token contract', slug: 'contract'},
  //   {name:'Lifesci placeholder', slug: 'placeholder'},
  //   {name:'Token implementation', slug: 'implementation'},
  //   {name:'ConsenSys multisig', slug: 'multisig'}
  // ]
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

