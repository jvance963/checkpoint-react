import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <header>
          <h1>This is a Header</h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/new-contact'>New Contact</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
