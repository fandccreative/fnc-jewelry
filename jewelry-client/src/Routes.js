import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header'
import Home from './components/home';
import Bracelets from './components/bracelets';
import Engagement from './components/engagement';
import Jewelry from './components/jewelry';
import Wedding from './components/wedding';
import Footer from './footer';

const Pagenotfound = () => (
	<div>
		<center><h1>Page Not Found</h1></center>
	</div>
)

const Routes = () => (
	<Router>
		<div>
			<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Bracelets" component={Bracelets} />
					<Route path="/Engagement" component={Engagement} />
					<Route path="/Jewelry" component={Jewelry} />
					<Route path="/Wedding" component={Wedding} />
					<Route component={Pagenotfound} />
				</Switch>
			<Footer />
		</div>
	</Router>
)
export default Routes;