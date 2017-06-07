import React from 'react';
import { NavDropdown, MenuItem} from 'react-bootstrap';

import logo from '.././assets/images/fnc.png';
import facebook from '.././assets/images/social-icons/facebook.png';
import twitter from '.././assets/images/social-icons/twitter.png';
import googleplus from '.././assets/images/social-icons/google-plus.png';
import instagram from '.././assets/images/social-icons/instagram.png';

class Header extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { isOpen: false };
	// }

	render() {
		return(
			<div id="navigation">
				<header>
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand" href=""><img src={logo} alt="fnc" /></a>
							</div>
							<div className="row">
								<ul className="nav navbar-nav navbar-right navtop">
									<li><a href="">Log in</a></li>
									<li className="divider-vertical"></li>
									<li><a href="">Register</a></li>
									<li className="divider-vertical"></li>
									<li><a href="">Settings</a></li>
									<li className="divider-vertical"></li>
									<li><a href="">Order Status</a></li>
									<li className="divider-vertical"></li>
									<li><a href="">Store Locator</a></li>
									<li className="call-us"><a href="">CALL US<br />+63 (2) 845 0146</a></li>
									<li className="email-us"><a href="">EMAIL US<br />info@fncjewelry.com</a></li>
								</ul>
							</div>
							<div className="row">
								<ul className="nav navbar-nav form-inline search-social">
									<input className="form-control" type="text" placeholder="Keyword or Item #" />&nbsp;
									<button className="btn btn-primary" type="submit">Search</button>&nbsp;
									<a href=""><img className="img-responsive" src={facebook} alt="facebook" /></a>
									<a href=""><img className="img-responsive" src={twitter} alt="twitter" /></a>
									<a href=""><img className="img-responsive" src={googleplus} alt="google-plus" /></a>
									<a href=""><img className="img-responsive" src={instagram} alt="instagram" /></a>
								</ul>
							</div>
						</div>
					</nav>
				</header>
				<nav className="navbar-main navbar navbar-default">
					<div className="container-fluid">
						<ul className="nav navbar-nav">
							<li><a href="">Home</a></li>

							<NavDropdown title="Engagement" id="nav-dropdown">
			          <MenuItem>Action</MenuItem>
			          <MenuItem>Another action</MenuItem>
			          <MenuItem>Something else here</MenuItem>
			          <MenuItem>Separated link</MenuItem>
        			</NavDropdown>

							<li><a href="">Wedding</a></li>
							<li><a href="">Jewelry</a></li>
							<li><a href="">Promos</a></li>
							<li><a href="">News &amp; Events</a></li>
							<li><a href="">About Us</a></li>
							<li><a href="">Contact</a></li>
							<li><a href="">Online</a></li>
							<li><a href="">Store Locator</a></li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Header;