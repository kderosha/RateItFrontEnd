import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

function isLoggedIn(){
  console.log(localStorage.getItem("rateItToken"));
  return localStorage.getItem("rateItToken");
}

class Navbar extends React.Component{
  render(){
    return (
      <nav>
        <Logo title="RateIt"></Logo>
        <NavLinks></NavLinks>
      </nav>
    );
  }
}

class Logo extends React.Component{
  render(){
    return (
      <div className="nav-title">RateIt</div>
    );
  }
}

class NavLinks extends React.Component{
  render(){
    return(
      <div>
        {
          (isLoggedIn() === null || isLoggedIn() === undefined) ? (<NavItem to="/auth" label="Login"></NavItem>) :''
        }
      </div>
    );
  }
}

class NavItem extends React.Component{
  render(){
    return(
      <Link className="nav-link" to={this.props.to}>{this.props.label}</Link>
    );
  }
}

export default Navbar;
