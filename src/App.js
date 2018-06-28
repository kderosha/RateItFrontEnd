import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/navbar.js';
import Auth from './components/auth/Auth.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Route exact path="/auth" component={Auth}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
