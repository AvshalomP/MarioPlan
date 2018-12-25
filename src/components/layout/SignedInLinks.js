import React from 'react';
import { NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';  //materialize UI


const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AP</NavLink></li>
        </ul>
    )
};


export default SignedInLinks;