import {Route, IndexRoute} from 'react-router'
import React from 'react'
import Home from './Home'
import MainLayout from './MainLayout'
import Contribution from './Contribution'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      component={MainLayout}
    >
      <IndexRoute
        component={Home}
      />
      <Route
        path="contribution"
        component={Contribution}
      />
    </Route >
  )
}


export default getRoutes