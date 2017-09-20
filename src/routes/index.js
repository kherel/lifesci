import {Route, IndexRoute} from 'react-router'
import React from 'react'
import Home from './Home'
import MainLayout from './MainLayout'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      component={MainLayout}
    >
      <IndexRoute
        component={Home}
      />
    </Route >
  )
}


export default getRoutes