import React from 'react';

import Feature1 from '.././assets/images/feature/feature-1.png';
import Feature2 from '.././assets/images/feature/feature-2.png';
import Feature3 from '.././assets/images/feature/feature-3.png';

class Feature extends React.Component {
	render() {
		return(
			<section id="feature" className="site-feature">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<div className="row">
								<div className="col-sm-4 col-md-4 col-lg-4">
									<div className="col-box">
										<img className="img-responsive" src={Feature1} alt="Feature" />
										<h2 className="title">Cocktails</h2>
										<p className="desc">all that glitters are diamonds & gold</p>
									</div>
								</div>
								<div className="col-sm-4 col-md-4 col-lg-4">
									<div className="col-box">
										<img className="img-responsive" src={Feature2} alt="Feature" />
										<h2 className="title">Valentine Heart</h2>
										<p className="desc">14-karat rose gold</p>										
									</div>
								</div>
								<div className="col-sm-4 col-md-4 col-lg-4">
									<div className="col-box">
										<img className="img-responsive" src={Feature3} alt="Feature" />
										<h2 className="title">Knuckle Ring</h2>
										<p className="desc">14-karat yellow gold</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Feature;
