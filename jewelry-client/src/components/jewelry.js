import React from 'react';

import { Panel } from 'react-bootstrap';

class Jewelry extends React.Component {
	constructor(...args) {
    super(...args);
    this.state = {
      popular: false,
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
				      <a onClick={ ()=> this.setState({ popular: !this.state.popular })}>
				      	<div className="panel-body panel-body-first">Popular Collections (45)<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
			      	<Panel className="collapsed-menu" collapsible expanded={this.state.popular}>
			      		<ul className="nav">
			      			<li className="first"><a href="">Necklaces</a></li>
			      			<li className="first"><a href="">Earrings</a></li>
			      			<li className="first"><a href="">Rings</a></li>
			      			<li className="last"><a href="">Bracelets</a></li>
			      		</ul>
			      	</Panel>
				      <a onClick={ ()=> this.setState({ arrivals: !this.state.arrivals })}>
				      	<div className="panel-body panel-body-last">New Arrivals (20)<span><i className="fa fa-angle-right pull-right" aria-hidden="true"></i></span></div>
				      </a>
				       <Panel className="collapsed-menu" collapsible expanded={this.state.arrivals}>
			      		<ul className="nav">
			      			<li className="first"><a href="">Necklaces</a></li>
			      			<li className="first"><a href="">Earrings</a></li>
			      			<li className="first"><a href="">Rings</a></li>
			      			<li className="last"><a href="">Bracelets</a></li>
			      		</ul>
			      	</Panel>
				    </div>
					</div>
				</div>
			</div>
		);
	}
}
export default Jewelry;