import React from 'react';

import LogoFooter from '.././assets/images/footer/logo-footer.png';

import facebook from '.././assets/images/social-icons/facebook-dark.png';
import google from '.././assets/images/social-icons/google-dark.png';
import instagram from '.././assets/images/social-icons/instagram-dark.png';
import pinterest from '.././assets/images/social-icons/pinterest-dark.png';
import twitter from '.././assets/images/social-icons/twitter-dark.png';

class Footer extends React.Component {
	render() {
		return(
			<footer id="footer" className="site-footer">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<div className="row">
								<div className="col-sm-12 col-md-2 col-lg-2 logo-footer-bot">
									<img src={LogoFooter} alt="F&C Footer" />
									<p>Since 1973</p>
								</div>
								<div className="col-sm-4 col-md-4 col-lg-4 location">
									<h2>Manila Office</h2>
									<ul>
										<li>3/L Glorietta 4 Ayala Center,</li>
										<li>Makati City, 1224 Philippines</li>
										<li>Telefax: +63 (2) 845 0146</li>
										<li>email: fncjewelryglorietta@yahoo.com</li>
									</ul>
									<h2>Head Office</h2>
									<ul>
										<li>73 Guanco Street, Iloilo City</li>
										<li>5000, Philippines</li>
										<li>Tel.: +63 (33) 337 6539</li>
										<li>Fax: +63 (33) 335 1150</li>
										<li>email: info@fncjewelry.com</li>
									</ul>
								</div>
								<div className="col-sm-4 col-md-3 col-lg-3 about_services">
									<h2>About Us</h2>
									<ul>
										<li>Store Locator</li>
										<li>Map Site</li>
										<li>Contact Us</li>
									</ul>
									<h2>Services</h2>
									<ul>
										<li>Shipping Information</li>
										<li>Gift cards</li>
										<li>Corporate Gifts</li>
										<li>Terms & Condition</li>
										<li>Privacy Policy</li>
									</ul>
								</div>
								<div className="col-sm-4 col-md-3 col-lg-3 information_education">
									<h2>Information</h2>
									<ul>
										<li>Help & FAQs</li>
										<li>Advance Search</li>
										<li>Store Events</li>
										<li>Careers</li>
									</ul>
									<h2>Edcuation</h2>
									<ul>
										<li>The 4Cs</li>
										<li>Diamonds</li>
										<li>Pearl Jewelry</li>
										<li>Birthstone Jewelry</li>
										<li>Gemstone Jewelry</li>
										<li>Jewelry Care</li>
									</ul>
								</div>
								<div className="col-sm-12 col-md-12 col-lg-12 social-media-footer">
									<p>Connect With Us</p>
									<ul>
										<li><a href=""><img src={facebook} alt="facebook" /></a></li>
										<li><a href=""><img src={google} alt="google" /></a></li>
										<li><a href=""><img src={instagram} alt="instagram" /></a></li>
										<li><a href=""><img src={pinterest} alt="pinterest" /></a></li>
										<li><a href=""><img src={twitter} alt="twitter" /></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="container">
						<p>Copyright &copy; 2016 <span>F&C JEWELRY</span> - All rights reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;