import React from 'react';
import { Link } from 'react-router-dom';

class JewelrySignIn extends React.Component{
  render(){
    return(
      <div className="formBox">
        <form className="form">
          <h2 className="titleHeader">Sign In</h2>
            <div className="inputContainer" >
              <div className="inputBlock">
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
              </div>
            </div>
            <div className="confirmationContainer">
              <span className="rememberMe"><input type="checkbox" id="checkbox"/> Remember Me</span>
              <input className="signInBtn" type="submit" value="Sign in" />
              <div className="forgotPassword"><a href="">Forgot password?</a></div>
              <div className="newUser">No account? <Link to="Signup">Sign up</Link></div>
            </div>
            <center>
            <div className="socialSignInHeader">Or use social login:</div>
            <div className="socialBtn">
              <button className="fbBtn">Facebook</button>
              <button className="gBtn">Google</button>
            </div>
            </center>

        </form>
      </div>
    );
  }
}

export default JewelrySignIn;
