import React from 'react';

class JewelrySignUp extends React.Component{
  render(){
    return(
      <form className="signUpForm">
        <div className="formContainer">
          <div className="socialBtn">
            <button className="fbBtn" href="">Sign up with Facebook</button>
            <button className="gBtn" href="">Sign up with Google</button>
          </div>
          <div className="orDivider">
            <hr className="hrLeft"/>or<hr className="hrRight" />
          </div>
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

export default JewelrySignUp;
