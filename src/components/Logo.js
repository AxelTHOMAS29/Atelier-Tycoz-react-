import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/">
               <img src='./img/LOGO ATELIER avril 2022 d.png' className='logo-img' alt='logo Atelier TyCoz' /> 
            </NavLink>         
        </div>
    );
};

export default Logo;