import React from 'react';
import { NavLink } from 'react-router-dom';

const Charte = () => {
    return (
        <footer>
            <div className='charte'>
                <NavLink to="/mentionslegales" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='mentionLegale'>
                        Mentions Légales
                    </span>
                </NavLink>
                <NavLink to="/cookies" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <span className='donneesPerso'>
                        Traitement des données personnelles
                    </span>
                </NavLink>
            </div>
        </footer>
    );
};

export default Charte;