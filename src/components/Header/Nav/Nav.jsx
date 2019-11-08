import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

class Nav extends React.Component {
  render(){
    return (
    <nav className="container-nav">
      <h1>Nav component</h1>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
        <li><Link to='/shopping'>SHOPPING</Link></li>
      </ul>
      </nav>
    )
  }
}

export default Nav;