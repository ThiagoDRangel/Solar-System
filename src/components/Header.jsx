import React, { Component } from 'react';
import Logo from '../images/logo.png';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="container-header">   
        <img
          src={ Logo }
          alt="logo system solar"
          className="logo-header"
        />
      </header>
    );
  }
}

export default Header;
