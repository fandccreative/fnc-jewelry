import React from 'react';

// imported pictures //

// import logo from '.././assets/images/fnc.png';
// import facebook from '.././assets/images/social-icons/facebook.png';
// import twitter from '.././assets/images/social-icons/twitter.png';
// import googleplus from '.././assets/images/social-icons/google-plus.png';
// import instagram from '.././assets/images/social-icons/instagram.png';

class Slider extends React.Component {
	render() {
		return(
			<section id="slider">
				<div className="container">
					<div className="slider-content">
						<div className="row">
							<div className="col-md-6">
								<p>Lorem Ipsum Dolor</p>
								<h1>F&C JEWELRY</h1>
								<p><span></span>Lorem ipsum dolor sit amet, sed leo integer<span></span></p>
								<button className="btn btn-default btn-slider-see-collection">See Collections</button>
							</div>
							<div className="col-md-6"></div>
						</div>
						
					</div>
				</div>
			</section>
		);
	}
}
export default Slider;