import React from 'react'
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'

const NoMatch = () => ( <h2> <center> 404 NOT FOUND </center> </h2> )

const routes = () =>(
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={App} />
            {/* add other route paths here */}
            <Route exact component={NoMatch} />
          </Switch>
        </div>
      </Router>
)

export default routes
