import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ()  => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to='/'><i class="fas fa-home"></i></Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  };

export default Navbar
