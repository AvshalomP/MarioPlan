import React from 'react';
import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';  //materialize UI


const SignedOutLinks = () => {
    return (
        <ul className="right" >
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/dashboard'>Login</NavLink></li>
        </ul>
    )
};


export default SignedOutLinks;