import React from 'react';
import './Header.css';
import Nav from './Nav/Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="container-header">
        <h1>Header component</h1>
        <Nav />
      </div>
    );
  }
}

export default Header;