import React from 'react';

import Logo from './assets/images/fnc.png';
import Facebook_ from './assets/images/social-icons/facebook.png';
import Twitter_ from './assets/images/social-icons/twitter.png';
import Google_ from './assets/images/social-icons/google-plus.png';
import Instagram_ from './assets/images/social-icons/instagram.png';

class Header extends React.Component {
	render() {
		return(
			<div id="main-header">
				<header id="header" className="site-header clearfix">
					<div className="container">
						<div className="site-header-inner">
							<img src={Logo} alt="Site-Logo" />
							<ul className="clearfix nav-top">
								<li><a href="">Log in</a><span className="divider"></span></li>
								<li><a href="">Register</a><span className="divider"></span></li>
								<li><a href="">Settings</a><span className="divider"></span></li>
								<li><a href="">Order Status</a><span className="divider"></span></li>
								<li className="li-last"><a href="">Store Locator</a></li>
								<li className="header-info"><a href="">Call Us<span>+63 (2) 845 0146</span></a></li>
								<li className="header-info"><a href="">Email Us<span>info@fncjewelry.com</span></a></li>
							</ul>
							<ul className="clearfix search-icons-cart">
								<li><input className="form-control" type="text" placeholder="Keyword or Item #" /></li>
								<li><button className="btn btn-default">Search</button></li>
								<li className="nav-social-icons desktop"><a href=""><img src={Facebook_} alt="Facebook" /></a></li>
								<li className="nav-social-icons desktop"><a href=""><img src={Twitter_} alt="Twitter" /></a></li>
								<li className="nav-social-icons desktop"><a href=""><img src={Google_} alt="Google" /></a></li>
								<li className="nav-social-icons desktop"><a href=""><img src={Instagram_} alt="Instagram" /></a></li>
								<li className="nav-social-icons"><a href=""><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><span className="cart-count">0</span></a></li>
							</ul>
						</div>
					</div>
				</header>
					<div className="container">
						<nav className="navbar navbar-default">
							<ul className="nav navbar-nav">
								<li><a href="">Home</a></li>
								<li><a href="">Engagement</a></li>
								<li><a href="">Wedding</a></li>
								<li><a href="">Jewelry</a></li>
								<li><a href="">Promos</a></li>
								<li><a href="">News & Events</a></li>
								<li><a href="">About Us</a></li>
								<li><a href="">Contact</a></li>
								<li><a href="">Online</a></li>
								<li><a href="">Store Locator</a></li>
							</ul>
						</nav>
					</div>
			</div>
		)
	}
}
export default Header;