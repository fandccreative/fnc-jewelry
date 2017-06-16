import React from 'react';

import { Panel } from 'react-bootstrap';

import Image from '.././assets/images/infoslider/bracelets.jpg';

class Jewelry extends React.Component {
	constructor(...args) {
    super(...args);
    this.state = {
      earrings: false,
      bracelets: false,
      rings: false,
      necklaces: false,
      arrivals: false
    };
  }
	render() {
		return(
			<div id="jewelry" className="site-jewelry clearfix">
				<div className="container">
					<div className="jewelry-sidebar">
						<div className="panel panel-default">
				      <div className="panel-heading">Categories</div>
				      <a onClick={ ()=> this.setState({ earrings: !this.state.earrings })}>
				      	<div className="panel-body panel-body-first">Earrings<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
			      	<Panel className="collapsed-menu" collapsible expanded={this.state.earrings}>
			      		<ul className="nav">
			      			<li className="first"><a href="">- Pearls</a></li>
			      			<li className="last"><a href="">- Gold</a></li>
			      		</ul>
			      	</Panel>

				      <a onClick={ ()=> this.setState({ bracelets: !this.state.bracelets })}>
				      	<div className="panel-body">Bracelets<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
				      <Panel className="collapsed-menu" collapsible expanded={this.state.bracelets}>
			      		<ul className="nav">
			      			<li className="first"><a href="">- Pearls</a></li>
			      			<li className="last"><a href="">- Gold</a></li>
			      		</ul>
			      	</Panel>
				      <a onClick={ ()=> this.setState({ rings: !this.state.rings })}>
				      	<div className="panel-body">Rings<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
				      <Panel className="collapsed-menu" collapsible expanded={this.state.rings}>
			      		<ul className="nav">
			      			<li className="first"><a href="">- Pearls</a></li>
			      			<li className="last"><a href="">- Gold</a></li>
			      		</ul>
			      	</Panel>
				      <a onClick={ ()=> this.setState({ necklaces: !this.state.necklaces })}>
				      	<div className="panel-body">Necklaces<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
				      <Panel className="collapsed-menu" collapsible expanded={this.state.necklaces}>
			      		<ul className="nav">
			      			<li className="first"><a href="">- Pearls</a></li>
			      			<li className="last"><a href="">- Gold</a></li>
			      		</ul>
			      	</Panel>
				      <a onClick={ ()=> this.setState({ arrivals: !this.state.arrivals })}>
				      	<div className="panel-body panel-body-last">New Arrivals<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
				       <Panel className="collapsed-menu" collapsible expanded={this.state.arrivals}>
			      		<ul className="nav">
			      			<li className="first"><a href="">- Pearls</a></li>
			      			<li className="last"><a href="">- Gold</a></li>
			      		</ul>
			      	</Panel>
				    </div>
					</div>
					<div className="jewelry-main">
						<div className="row">
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 103</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 103</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 103</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Bracelet 103</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
						</div>
						<ul className="pagination pagination-sm pull-right">
						  <li><a href="">1</a></li>
						  <li><a href="">2</a></li>
						  <li><a href="">3</a></li>
						  <li><a href="">4</a></li>
						  <li><a href="">5</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Jewelry;