import React from 'react';
import Charte from '../components/Charte';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Cookies = () => {
    return (
        <div className='cookies'>
            <Navigation />
            <Logo />
            <main>
                <span>
                    Ce site n'utilise pas de logiciel de traitement de donnée.
                </span>
            </main>
            <footer>
                <Charte />
            </footer>
        </div>
    );
};

export default Cookies;