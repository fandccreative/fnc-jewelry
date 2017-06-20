import React from 'react';
import { Link } from 'react-router-dom';

class JewelrySignUp extends React.Component{
  render(){
    return(
      <div className="formBox">
        <form className="form">
          <h2 className="titleHeader">Sign Up</h2>
            <div className="inputContainer" >
              <div className="inputBlock">
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <input type="text" placeholder="First Name" required/>
                <input type="text" placeholder="Last Name" required/>
                <input type="number" placeholder="Contact Number" required/>
                <input type="text" placeholder="Delivery Address" required/>
                <input type="date" placeholder="Birthdate" />
              </div>
            </div>
            <div className="confirmationContainer">
            <input className="signUpBtn" type="submit" value="Sign up" />
            <div className="newUser">Already signed up? <Link to="Signin">Sign in</Link></div>
            </div>
        </form>
      </div>
    );
  }
}

export default JewelrySignUp;
