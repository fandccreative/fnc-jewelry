import React from "react";

class SignIn extends React.Component{
  render(){
    return(
      <form className="signInForm">
        <h2 className="signInHeader">Sign In</h2>
          <div className="signInContainer">
            <div className="socialSignIn">
              <button className="fbSignIn" href="">Facebook</button>
              {" "}
              <button className="gSignIn" href="">Google</button>
            </div>
            <hr />
            <label>User Name: </label>
            <input type="text" />
            <br />
            <label>Password: </label>
            <input type="password" />
            <br />
            <input className="signInBtn" type="submit" value="Sign In" />
            <p> Forgot Password?<a href=""> Request new password</a></p>
            <p>Not Registered?<a href="">Sign up now </a></p>
        </div>
      </form>
    );
  }
}

class SignUp extends React.Component{
  render(){
    return(
      <form className="signUpForm">
        <h2 className="signUpHeader">Register</h2>
        <div className="signUpContainer">
          <label>Email: </label>
          <input type="email" placeholder="jane_doe@example.com" required/>
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
          <input type="date" />
          <br />
          <label>Delivery Address: </label>
          <input type="text" />
          <br />
          <label>Contact No.: </label>
          <input type="text" />
          <br />
          <input type="button" value="Submit"/>
        </div>
      </form>
    );
  }
}

class SignInForm extends React.Component {
  render() {
    return (
      <div className="signForm">
        <SignIn />
        <br />
        <SignUp />
      </div>
    )
  }
};

export default SignInForm;
