/*
 * When running `npm run demo`, you will see the pages rendered by this file.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/*
 * Each page has its own file in the "demo" folder. By default, it is the Home
 * page. The code for it is in the home.js file.
 */
import Home from './home'
import About from './about'
import HeroHeader from './heroheader'
import Organiser from './organiser'
import Footer from './footer'

/*
 * The router says which path correspond to which page.
 */
const App = () => (
  <Router>
    <div>
      <HeroHeader />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Organiser />
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('react-root'));
