import React from 'react';

import Bracelet from '.././assets/images/infoslider/bracelets.jpg';

class Tab extends React.Component {
	render() {
		return(
			<section id="tab" className="site-tab">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<div className="row">
								<div className="col-sm-12 col-md-6 col-lg-6">
									<h2 className="title">Bracelets</h2>
									<p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
									<button className="btn button-tab">See the Collection</button>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img className="img-responsive img-bracelet" src={Bracelet} alt="Bracelets" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Tab;