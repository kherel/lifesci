import { Route, IndexRoute, IndexRedirect } from 'react-router'
import React from 'react'
import MainLayout from './MainLayout'
import Documents from './Documents'
import Read from './Read'
import Home from './Home'
import ContactUs from './ContactUs'
import Team from './Team'
import Roadmap from './Roadmap'
import Legal from './Legal'
import Contribution from './Contribution'
import Faq from './Faq'
import Test from './test2'

const getRoutes = () => {
  return (
    <Route path="/" component={MainLayout} prepareData={MainLayout.prepareData}>
      <IndexRoute component={Home} />
      <Route path="/whitepaper" component={Documents} />
      <Route path="/read" component={Read} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/team" component={Team} />
      <Route path="contribution" component={Contribution} />
      <Route path="faq" component={Faq} />
      {getLegal()}
      <Route path="/test" component={Test} />
      <Route path="/roadmap" component={Roadmap} />
    </Route>
  )
}

export default getRoutes

const getLegal = () => (
  <Route path="/legal">
    <IndexRedirect to="business-terms-of-service" />

    <Route path="business-terms-of-service" component={Legal} />
    <Route path="supplements" component={Legal} />
    <Route path="complaints-policy" component={Legal} />
    <Route path="cookies-policy" component={Legal} />
  </Route>
)
