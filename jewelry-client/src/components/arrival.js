import React from 'react';

import Starsborder from '.././assets/images/stars-border.png';
import Ring1 from '.././assets/images/arrival/ring-1.png';
import Ring2 from '.././assets/images/arrival/ring-2.png';
import Ring3 from '.././assets/images/arrival/ring-3.png';

class Arrival extends React.Component {
	render() {
		return(
			<section id="arrival" className="site-arrival">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<p className="intro">New</p>
							<h2 className="title">Arrivals</h2>
							<img className="border-stars" src={Starsborder} alt="Arrival" />
							<div className="row product">
								<div className="col-sm-12 col-md-4 col-lg-4 product-col">
									<div className="arrival-box">
										<img src={Ring1} alt="Ring-1" />
										<h2 className="product-title">ABCDEF - 12<span></span></h2>
										<a className="link" href="">See the item</a>
									</div>
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4 product-col">
									<div className="arrival-box">
										<img src={Ring2} alt="Ring-2" />
										<h2 className="product-title">ABCDEF - 13<span></span></h2>
										<a className="link" href="">See the item</a>
									</div>
								</div>	
								<div className="col-sm-12 col-md-4 col-lg-4 product-col">
									<div className="arrival-box">
										<img src={Ring3} alt="Ring-3" />
										<h2 className="product-title">ABCDEF - 13<span></span></h2>
										<a className="link" href="">See the item</a>
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
export default Arrival;