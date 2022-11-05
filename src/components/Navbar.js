import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='toggleButton'>
        <button></button>
      </div>
      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/aboutme'> About Me </Link>
      </div>
    </div>
  );
}

export default Navbar