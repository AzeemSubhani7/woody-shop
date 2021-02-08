import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../assets/crown.svg';
//import { default as logo } from '../assets/crown.svg';
import './css/header.scss';
import { auth } from './firebase/firebase.util';

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



const Header = ( { currentUser } ) => (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <ReactLogo className='logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className='option'>
                <h2>SHOP</h2>
                </Link>
                <Link to='/shop' className='option'>
                <h2>CONTACT</h2>
                </Link>
                {
                    currentUser ? <div className='option' onClick={ () => auth.signOut() }><h2>SIGN OUT</h2></div> : <Link className="option" to='/signin'><h2>SIGN IN</h2></Link>
                }
            </div>
        </div>
    );


export default Header;