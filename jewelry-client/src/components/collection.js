import React from 'react';

import Starsborder from '.././assets/images/stars-border.png';
import Necklaces from '.././assets/images/collections/necklaces.png';
import Earrings from '.././assets/images/collections/earrings.png';
import Rings from '.././assets/images/collections/rings.png';
import Bracelets from '.././assets/images/collections/bracelets.png';

class Collection extends React.Component {
	render() {
		return(
			<section id="collection" className="site-collection">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<h2 className="title">Popular Collections</h2>
							<img className="border-stars" src={Starsborder} alt="Popular Collections" />
							<div className="row product">
								<div className="col-sm-6 col-md-3 col-lg-3 product-col">
									<div className="product-box">
										<img className="img-responsive img-product" src={Necklaces} alt="Necklaces" />
										<h3 className="product-title">Necklaces<span></span></h3>
										<a className="link" href="">See the Collection</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-3 col-lg-3 product-col">
									<div className="product-box">
										<img className="img-responsive img-product" src={Earrings} alt="Earrings" />
										<h3 className="product-title">Earrings<span></span></h3>
										<a className="link" href="">See the Collection</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-3 col-lg-3 product-col">
									<div className="product-box">
										<img className="img-responsive img-product" src={Rings} alt="Rings" />
										<h3 className="product-title">Rings<span></span></h3>
										<a className="link" href="">See the Collection</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-3 col-lg-3 product-col">
									<div className="product-box">
										<img className="img-responsive img-product" src={Bracelets} alt="Bracelets" />
										<h3 className="product-title">Bracelets<span></span></h3>
										<a className="link" href="">See the Collection</a>
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
export default Collection;