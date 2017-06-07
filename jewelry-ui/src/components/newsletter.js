import React from 'react';

class Newsletter extends React.Component {
	render() {
		return(
			<section id="newsletter">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-12 col-lg-12">
							<h1>Sign - Up For Our Newsletter</h1>
							<p>Stay up-to-date with our new openings, upcoming events, seasonal specials, and promotions.</p>
							<div className="form-newsletter form-inline text-center">
								<input className="form-control" type="text" placeholder="Enter your Email Address" />&nbsp;
								<button className="btn btn-default" type="submit">Sign Me Up</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Newsletter;