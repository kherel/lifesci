import {Route, IndexRoute} from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Documents from './Documents'
import Home from './Home'
import ContactUs from './ContactUs'
import Team from './Team'
import Roadmap from './Roadmap'

import Test from './test2'


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
        path="/whitepaper"
        component={Documents}
      />
      <Route
        path="/contact-us"
        component={ContactUs}
      />
      <Route
        path="/team"
        component={Team}
      />
      <Route
        path="/test"
        component={Test}
      />
      <Route
        path="/roadmap"
        component={Roadmap}
      />
    </Route >
  )
}


export default getRoutes