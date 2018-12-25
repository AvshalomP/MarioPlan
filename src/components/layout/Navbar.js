import React from 'react';
import { Link } from 'react-router-dom';
//components
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks'


const Navbar = (props) => {
    const signed = true;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                { signed ? (<SignInLinks/>) : (<SignOutLinks/>) }
            </div>
        </nav>
    )
};


export default Navbar;