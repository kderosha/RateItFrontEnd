import React from "react";
import "./loginForm.css";

class Auth extends React.Component{
  render(){
    return(
      <section className="page">
        <Login/>
        <SignUp/>
      </section>
    );
  }
}

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleEmailChange(event){
    this.setState({email:event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password:event.target.value});
  }

  /**
    Login fetch
  */
  login(){
    fetch("http://localhost:3001/auth/login/" + this.state.email + "/" + this.state.password).then(results => {
      return results.json();
    }).then(token => {
      localStorage.setItem("rateItToken", token.rateItToken);
      window.location = "/";
    });
  }

  render(){
    return (
      <div className="auth-form">
        <h2>
          Login
        </h2>
        <div className="form-property-container">
          <div>
            Email
          </div>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
        </div>
        <div className="form-property-container">
          <div>
            Password
          </div>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

class SignUp extends React.Component{
  render(){
    return(
      <div>
        Sign Up
      </div>
    );
  }
}
export default Auth;
