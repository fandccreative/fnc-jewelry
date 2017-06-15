import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header'
import Home from './components/home';
import Bracelets from './components/bracelets';
import Footer from './footer';

const Pagenotfound = () => (
	<center><h3>Page Not Found</h3></center>
)

const Routes = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/bracelets" component={Bracelets} />
				<Route component={Pagenotfound} />
			</Switch>
			<Footer />
		</div>
	</Router>
)
export default Routes;