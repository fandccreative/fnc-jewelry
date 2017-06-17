import React from 'react';
import { Link } from 'react-router-dom';

import { Panel } from 'react-bootstrap';
import Image from '.././assets/images/collections/rings.png';

class Rings extends React.Component {
	constructor(...args) {
    super(...args);
    this.state = {
      popular: true,
      arrivals: true
    };
  }
	render() {
		return(
			<div id="jewelry" className="site-jewelry clearfix">
				<div className="container">
					<div className="jewelry-sidebar">
						<div className="panel panel-default">
				      <div className="panel-heading">Categories</div>
				      <a onClick={ ()=> this.setState({ popular: !this.state.popular })}>
				      	<div className="panel-body panel-body-first">Popular Collections (45)<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
			      	<Panel className="collapsed-menu" collapsible expanded={this.state.popular}>
			      		<ul className="nav">
			      			<li className="first"><Link to="./Necklaces">Necklaces</Link></li>
			      			<li className="first"><Link to="./Earrings">Earrings</Link></li>
			      			<li className="first"><Link to="./Rings">Rings</Link></li>
			      			<li className="last"><Link to="./Bracelets">Bracelets</Link></li>
			      		</ul>
			      	</Panel>
				      <a onClick={ ()=> this.setState({ arrivals: !this.state.arrivals })}>
				      	<div className="panel-body panel-body-last">New Arrivals (20)<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
				       <Panel className="collapsed-menu" collapsible expanded={this.state.arrivals}>
			      		<ul className="nav">
			      			<li className="first"><a href="">No Item Available</a></li>
			      		</ul>
			      	</Panel>
				    </div>
					</div>
					<div className="jewelry-main">
						<div className="row">
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 103</p>
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
									<p className="name">Rings 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 103</p>
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
									<p className="name">Rings 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="out-of-stocks">Out of Stocks</span>
									<button className="btn btn-default disabled">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 103</p>
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
									<p className="name">Rings 101</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 102</p>
									<p className="price">&#8369; 1,354.50</p>
									<span className="stocks-available">Stocks Available</span>
									<button className="btn btn-default">Add to Cart</button>
								</div>
							</div>
							<div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
								<div className="wrap">
									<img className="img-responsive" src={Image} alt="Bracelets" />
									<p className="name">Rings 103</p>
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
export default Rings;