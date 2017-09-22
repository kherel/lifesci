import {Route, IndexRoute} from 'react-router'
import React from 'react'
import Documents from './Documents'
import Home from './Home'
import Team from './Team'
import Test from './Test'

import MainLayout from './MainLayout'

const getRoutes = () => {
  return (
    <Route
      path="/"
      component={MainLayout}
      prepareData={MainLayout.prepareData}
    >
      <IndexRoute
        component={Home}
      />
      <Route
        path="/doc"
        component={Documents}
      />
      <Route
        path="/team"
        component={Team}
      />
      <Route
        path="/test"
        component={Test}
      />
    </Route >
  )
}


export default getRoutes