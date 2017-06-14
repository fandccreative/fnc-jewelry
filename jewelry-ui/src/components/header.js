import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		return(
			<header id="header" className="site-header">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<nav className="navbar navbar-default main-nav">
								<div className="container-fluid1">
									<ul className="nav navbar-nav">
										<li><Link to= "/">Home</Link></li>
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
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default Header;
