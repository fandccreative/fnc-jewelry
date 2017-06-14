import React from 'react';

import SpecialRing from '.././assets/images/special/special-ring.png';

class Special extends React.Component {
	render() {
		return(
			<section id="special" className="site-special">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<div className="row">
								<div className="col-sm-12 col-md-2 col-lg-2">
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<img className="img-responsive img-special text-right" src={SpecialRing} alt="Special" />
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<h1 className="title">Lorem Ipsum<span></span></h1>
									<p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat sed nisl eu porta. Nullam tincidunt dictum sem, ac pharetra nulla ullamcorper nec. Phasellus sed posuere nibh. Integer blandit lectus ligula.</p>
									<button className="btn button-special">See Collections</button>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Special;
