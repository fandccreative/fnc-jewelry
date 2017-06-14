import React from 'react';

import OfferDiscount from '.././assets/images/offer/offer-discount.png';

class Offer extends React.Component {
	render() {
		return(
			<section id="offer" className="site-offer">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<h2 className="qoute-title">“ Lorem ipsum dolor sit amet, consectetuer adipiscing. ”</h2>
							<p className="author-qoute">- Abcdefghijk Lmnopqrs</p>
							<div className="row">
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img src={OfferDiscount} alt="Offer-Discount" />
									
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Offer;
