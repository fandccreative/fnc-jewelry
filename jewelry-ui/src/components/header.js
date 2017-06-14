import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// imported pictures //

// import logo from '.././assets/images/fnc.png';
// import facebook from '.././assets/images/social-icons/facebook.png';
// import twitter from '.././assets/images/social-icons/twitter.png';
// import googleplus from '.././assets/images/social-icons/google-plus.png';
// import instagram from '.././assets/images/social-icons/instagram.png';

class Header extends React.Component {
	render() {
		return(
			<header id="header">
			<Navbar fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href=""></a>
					</Navbar.Brand>
				</Navbar.Header>
			</Navbar>
			<Navbar id="mainNavigation" className="container">
					<Nav>
						<NavItem eventKey={1} href="">Home</NavItem>
						<NavItem eventKey={1} href="">Engagement</NavItem>
						<NavItem eventKey={1} href="">Wedding</NavItem>
						<NavItem eventKey={1} href="">Jewelry</NavItem>
						<NavItem eventKey={1} href="">Promos</NavItem>
						<NavItem eventKey={1} href="">News & Events</NavItem>
						<NavItem eventKey={1} href="">About Us</NavItem>
						<NavItem eventKey={1} href="">Contact</NavItem>
						<NavItem eventKey={1} href="">Online</NavItem>
						<NavItem eventKey={1} href="">Store Locator</NavItem>
					</Nav>
			</Navbar>
			</header>
		);
	}
}
export default Header;