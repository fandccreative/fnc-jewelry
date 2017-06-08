import React from 'react';

// imported pictures //
import Bracelet from '.././assets/images/infoslider/bracelets.jpg';
// import logo from '.././assets/images/fnc.png';
// import facebook from '.././assets/images/social-icons/facebook.png';
// import twitter from '.././assets/images/social-icons/twitter.png';
// import googleplus from '.././assets/images/social-icons/google-plus.png';
// import instagram from '.././assets/images/social-icons/instagram.png';

class Infoslider extends React.Component {
	render() {
		return(
			<section id="info-slider">
				<div className="container">
					<div className="info-slider-content">
						<div className="row">
							<div className="col-md-6">
								<h1>Bracelets</h1>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
								<button className="btn btn-primary btn-infoslider-collections">See the Collection</button>
							</div>
							<div className="col-md-6">
								<img src={Bracelet} alt="fnc-bracelets" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Infoslider;