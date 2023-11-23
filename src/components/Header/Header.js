import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.jpg'
const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);


    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="navbar">
            <div className="logo"><img src={logo}/></div>
            <div className="header">
                <div className='menu'>
                    <button className='fw-bold'>AnyWhere  </button><span className='border1'></span>
                    <button className='fw-bold'>Any Week </button><span className='border1'></span>
                    <button>Any Guests</button>
                    <button className='search-icon'><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </div>
            <div className="user-icons">
                <button className='yourhome'>Find <span className='dream'>Dream</span> Home</button>
                <button> <FontAwesomeIcon icon={faGlobe} /></button>
                <div className='profile'>
                    <div className='toggle'>
                        <button onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <button onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>

                    </div>


                </div>
                {isDropdownVisible && (
                    <div className='dropdown'>
                        <div className='newrelease'>
                            <p>Winter New Release <span>New</span></p>

                        </div>
                        <div className='registration'>
                            <p>Sign Up</p>
                            <p>Login</p>
                        </div>
                        <div className='more'>
                            <p>Gift Cards</p>
                            <p>Airbnb Your Home</p>
                            <p>Help Center</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
