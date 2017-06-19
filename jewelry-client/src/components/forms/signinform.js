import React from 'react';
import {Link} from 'react-router-dom';

class JewelrySignIn extends React.Component{
  render(){
    return(
      <div className="jewelrySignIn">
      <form className="signInForm">
        <div className="formContainer">
          <div className="socialBtn">
            <button className="fbBtn" href="">Sign in with Facebook</button>
            <button className="gBtn" href="">Sign in with Google</button>
          </div>
          <div className="orDivider">
            <hr className="hrLeft"/>or<hr className="hrRight" />
          </div>
          <div className="inputContainer">
            <input type="text" placeholder="Email" required/>
            <br />
            <input type="password" placeholder="Password" required/>
            <br />
          </div>
          <div className="gridContainer">
          <div className="gridRemember">
            <input type="checkbox" value="Remeber Me" /> Remember me
          </div>
            <a className="gridForgot" href=""> Forgot password?</a>
          </div>
            <br />
            <input className="signInBtn" type="submit" value="Sign In" />
            <br />
            <p>Not Registered? <Link to="/SignUp" className="gridSignUp" href="">Sign up now </Link></p>
        </div>
      </form>
      </div>
    );
  }
}

export default JewelrySignIn;
