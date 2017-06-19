import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header'
import Home from './components/home';
import Bracelets from './components/bracelets';
import Necklaces from './components/necklaces';
import Earrings from './components/earrings';
import Rings from './components/rings';
import Engagement from './components/engagement';
import Jewelry from './components/jewelry';
import Wedding from './components/wedding';
import Footer from './footer';

// Sign in Sign out

import Signin from './components/forms/signinform';
import Signup from './components/forms/signupform';

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
					<Route path="/Signin" component={Signin} />
					<Route path="/Signup" component={Signup} />
					<Route path="/Bracelets" component={Bracelets} />
					<Route path="/Necklaces" component={Necklaces} />
					<Route path="/Earrings" component={Earrings} />
					<Route path="/Rings" component={Rings} />
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
