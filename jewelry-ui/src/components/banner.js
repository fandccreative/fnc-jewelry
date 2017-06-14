import React from 'react';

class Banner extends React.Component {
	render() {
		return(
			<section id="banner" className="site-banner">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<p className="intro">Lorem Ipsum Dolor</p>
							<h1 className="title">F&amp;C Jewelry</h1>
							<p className="desc">Lorem ipsum dolor sit amet, sed leo integer</p>
							<button className="btn button-banner">See Collections</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Banner;