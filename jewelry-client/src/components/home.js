import React, { Component } from 'react';

import Starsborder from '.././assets/images/stars-border.png';
import Ring1 from '.././assets/images/arrival/ring-1.png';
import Ring2 from '.././assets/images/arrival/ring-2.png';
import Ring3 from '.././assets/images/arrival/ring-3.png';

import Necklaces from '.././assets/images/collections/necklaces.png';
import Earrings from '.././assets/images/collections/earrings.png';
import Rings from '.././assets/images/collections/rings.png';
import Bracelets from '.././assets/images/collections/bracelets.png';

import Feature1 from '.././assets/images/feature/feature-1.png';
import Feature2 from '.././assets/images/feature/feature-2.png';
import Feature3 from '.././assets/images/feature/feature-3.png';

// import OfferDiscount from '.././assets/images/offer/offer-discount.png';

import SpecialRing from '.././assets/images/special/special-ring.png';

import Bracelet from '.././assets/images/infoslider/bracelets.jpg';

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

class Newsletter extends React.Component {
	render() {
		return(
			<section id="newsletter" className="site-newsletter">
				<div className="container">
					<div className="content">
						<div className="content-inner">
							<div className="row">
								<div className="col-sm-6 col-md-12 col-lg-12">
									<h1 className="title">Sign - Up For Our Newsletter</h1>
									<p className="desc">Stay up-to-date with our new openings, upcoming events, seasonal specials, and promotions.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

// class Offer extends React.Component {
// 	render() {
// 		return(
// 			<section id="offer" className="site-offer">
// 				<div className="container">
// 					<div className="content">
// 						<div className="content-inner">
// 							<h2 className="qoute-title">“ Lorem ipsum dolor sit amet, consectetuer adipiscing. ”</h2>
// 							<p className="author-qoute">- Abcdefghijk Lmnopqrs</p>
// 							<div className="row">
// 								<div className="col-sm-12 col-md-6 col-lg-6">
// 									<img src={OfferDiscount} alt="Offer-Discount" />
// 								</div>
// 								<div className="col-sm-12 col-md-6 col-lg-6">
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		);
// 	}
// }

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
const Tab = () => (
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
)

class Home extends Component {
  render() {
    return (
      <div className="App">
      	<Banner />
      	<Tab />
      	<Collection />
      	<Arrival />
        <Feature />
        <Special />
        <Newsletter />
      </div>
    );
  }
}

export default Home;
