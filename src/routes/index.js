import {Route, IndexRoute} from 'react-router'
import React from 'react'
import Documents from './Documents'
import Home from './Home'
import Team from './Team'

import MainLayout from './MainLayout'

const getRoutes = () => {
  return (
    <Route
      path="/"
      component={MainLayout}
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
    </Route >
  )
}


export default getRoutes