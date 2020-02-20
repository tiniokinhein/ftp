import React from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ConsultingServices from './pages/ConsultingServices'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import CustomizedSoftware from './pages/CustomizedSoftware'
import WebDesignCreation from './pages/WebDesignCreation'
import Default from './pages/NotFound'
import MobileApplication from './pages/MobileApplication'
import SystemMaintenanceSupport from './pages/SystemMaintenanceSupport'
import NetworkSecurity from './pages/NetworkSecurity'
import Enquiry from './pages/Enquiry'


export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Helmet
            defaultTitle="Frontier Technology Partners"
            titleTemplate="%s - Frontier Technology Partners"
            meta={[
              {
                name: 'description',
                content: 'Frontier Technology Partners is providing business business solutions for new markets.'
              },
              {
                property: 'og:type',
                content: 'website'
              }
            ]}
          />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/careers" component={Careers} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/enquiry" component={Enquiry} />
            <Route path="/it-consulting" component={ConsultingServices} />
            <Route path="/customized-software-solutions" component={CustomizedSoftware} />
            <Route path="/web-design-creation" component={WebDesignCreation} />
            <Route path="/mobile-application" component={MobileApplication} />
            <Route path="/system-maintenance-support" component={SystemMaintenanceSupport} />
            <Route path="/network-security" component={NetworkSecurity} />
            <Route component={Default} />
          </Switch>

        </Router>

      </React.Fragment>
    )
  }
}
