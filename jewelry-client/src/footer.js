import React from 'react';

// Imported Files
import LogoFooter from './assets/images/footer/logo-footer.png'; // Footer Logo
import Facebook from './assets/images/social-icons/facebook-dark.png'; // Facebook
import Google from './assets/images/social-icons/google-dark.png';	// Google Plus
import Instagram from './assets/images/social-icons/instagram-dark.png';	// Instagram
import Pinterest from './assets/images/social-icons/pinterest-dark.png';	// Pinterest
import Twitter from './assets/images/social-icons/twitter-dark.png';	// Twitter

class Footer extends React.Component {
	render() {
		return(
			<footer id="footer" className="site-footer clearfix">
				<div className="container">
					<div className="site-footer-inner">
						<div className="row">
							<div className="logo-footer col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<img className="img-responsive" src={LogoFooter} alt="Site-Logo-Footer" />
							</div>
							<div className="location col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<p>Manila Office</p>
								<ul>
									<li>3/L Glorietta 4 Ayala Center,</li>
									<li>Makati City, 1224 Philippines</li>
									<li>Telefax: +63 (2) 845 0146</li>
									<li>Email: fncjewelryglorietta@yahoo.com</li>
								</ul>
								<p>Head Office</p>
								<ul>
									<li>73 Guanco Street, Iloilo City</li>
									<li>5000, Philippines</li>
									<li>Tel.: +63 (33) 337 6539</li>
									<li>Fax: +63 (33) 335 1150</li>
									<li>Email: info@fncjewelry.com</li>
								</ul>
							</div>
							<div className="about-services col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<p>About Us</p>
								<ul>
									<li><a href="">Store Locator</a></li>
									<li><a href="">Map Site</a></li>
									<li><a href="">Contact Us</a></li>
								</ul>
								<p>Services</p>
								<ul>
									<li><a href="">Shipping Information</a></li>
									<li><a href="">Gift Cards</a></li>
									<li><a href="">Corporate Gifts</a></li>
									<li><a href="">Terms &amp; Conditions</a></li>
									<li><a href="">Privacy Policy</a></li>
								</ul>
							</div>
							<div className="information-education col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<p>Information</p>
								<ul>
									<li><a href="">Help &amp; FAQs</a></li>
									<li><a href="">Advance Search</a></li>
									<li><a href="">Store Events</a></li>
									<li><a href="">Careers</a></li>
								</ul>
								<p>Education</p>
								<ul>
									<li><a href="">The 4Cs</a></li>
									<li><a href="">Diamonds</a></li>
									<li><a href="">Pearl Jewelry</a></li>
									<li><a href="">Birthstone Jewelry</a></li>
									<li><a href="">Gemstone Jewelry</a></li>
									<li><a href="">Jewelry Care</a></li>
								</ul>
							</div>
						</div>
						<div className="social-media">
							<p>Connect With Us</p>
							<ul>
								<li><a href=""><img src={Facebook} alt="Facebook" /></a></li>
								<li><a href=""><img src={Google} alt="Google Plus" /></a></li>
								<li><a href=""><img src={Instagram} alt="Instagram" /></a></li>
								<li><a href=""><img src={Pinterest} alt="Pinterest" /></a></li>
								<li><a href=""><img src={Twitter} alt="Twitter" /></a></li>
							</ul>
						</div>		
					</div>
				</div>
				<div className="copyright">
					<p>Copyright &copy; 2016 <span>F&amp;C Jewelry</span> - All Rights Reserved.</p>
				</div>
			</footer>
		)
	}
}
export default Footer;