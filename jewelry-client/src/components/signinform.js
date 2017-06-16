import React from "react";
import './Form.css';

//Sign In Form
class JewelrySignIn extends React.Component{
  render(){
    return(
      <form className="signInForm">
        <h2 className="formHeader">SIGN IN</h2>
          <div className="formContainer">
            <div className="socialSign">
              <button className="fbSign" href="">Sign in with Facebook</button>
              {" "}
              <button className="gSign" href="">Sign in with Google</button>
            </div>
            <div className="orDivider">
              <hr className="hrLeft"/>or<hr className="hrRight" />
            </div>
            <div className="inputContainer">
              <input type="text" placeholder="Email" required/>
              <br />
              <input type="password" placeholder="Password" required/>
              <br />
              <input type="checkbox" value="Remeber Me" />Remember me
              <br />
              <input className="signInBtn" type="submit" value="Sign In" />
              <p className="signInMenu"> Forgot Password?<a href=""> Request new password</a></p>
              <p className="signInMenu">Not Registered?<a href=""> Sign up now </a></p>
          </div>
        </div>
      </form>
    );
  }
}

// Sign Up Form
class JewelrySignUp extends React.Component{
  render(){
    return(
      <form className="signUpForm">
        <h2 className="formHeader">SIGN UP</h2>
        <div className="formContainer">
          <div className="inputContainer">
            <label>Email: </label>
            <input type="email" placeholder="jane_doe@example.com" required/>
            <br />
            <label>Password: </label>
            <input type="password" />
            <br />
            <label>Retype Password: </label>
            <input type="password" />
            <br />
            <label>First Name: </label>
            <input type="text" />
            <br />
            <label>Middle Name: </label>
            <input type="text" />
            <br />
            <label>Last Name: </label>
            <input type="text" />
            <br />
            <label>Birthday: </label>
            <input type="date" value="birthDate"/>
            <br />
            <label>Delivery Address: </label>
            <input type="text" />
            <br />
            <label>Phone Number: </label>
            <input type="tel" />
            <br />
            <input className="signUpBtn" type="button" value="Submit"/>
          </div>
        </div>
      </form>
    );
  }
}

class JewelryForm extends React.Component{
  //This is for testing purposes, sign in and sign up will have routes
  constructor(props){
    super(props);
    this.state = {
      showSignIn:true,
      showSignUp:false
    }
    this.showSignup = this.showSignup.bind(this)
    this.showSignin = this.showSignin.bind(this)
  }

  showSignin(){
    this.setState(prevState =>({
      showSignIn: !prevState.showSignIn,
      showSignUp: false
    }));
  }


  showSignup(){
    this.setState(prevState =>({
      showSignIn: false,
      showSignUp: !prevState.showSignUp
    }));
  }

  render(){
    return(
      <div>
        <button onClick={this.showSignin}> Sign In </button> {" "}
        <button onClick={this.showSignup}> Sign Up </button>
          <br />
          <br />
          {this.state.showSignIn && <JewelrySignIn />}
          <br />
          {this.state.showSignUp && <JewelrySignUp />}
      </div>
    );
  }
}
export default JewelryForm;
