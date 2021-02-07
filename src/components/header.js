import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../assets/crown.svg';
//import { default as logo } from '../assets/crown.svg';
import './css/header.scss';

// <link to='/' className='logo-container'>
//         <ReactLogo className='logo' />
//     </link>
//     <div className="options">
//         <Link to='/shop' className='option'>
//         SHOP
//         </Link>
//         <Link to='/contact' className='option'>
//         CONTACT
//         </Link>
//     </div>



const Header = () => (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <ReactLogo className='logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className='option'>
                <h3>SHOP</h3>
                </Link>
                <Link to='/shop' className='option'>
                <h3>CONTACT</h3>
                </Link>
            </div>
        </div>
    );


export default Header;