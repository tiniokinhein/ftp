import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
// import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const rootElement = document.getElementById("root")

// ReactDOM.hydrate(
//     <Router>
//         <App/>
//     </Router>, rootElement
// );

if (rootElement.hasChildNodes()) {
  ReactDom.hydrate(<App />, rootElement);
  } else {
    ReactDom.render(<App />, rootElement);
  }


serviceWorker.register()
