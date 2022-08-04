import React from 'react';
import Charte from '../components/Charte';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const MentionsLegales = () => {
    return (
        <div className='mentionsLegales'>
            <Navigation />
            <Logo />
            <main>
                <span>Raison sociale : Atelier TyCoz
                    <br />Nom du directeur : Nathalie Bennasar
                    <br />Nom du directeur de publication : Nathalie Bennasar
                    <br />Siège Social : St martin des champs 29600
                    <br />Numéro de téléphone : 06.63.23.03.96
                    <br />Hébergeur : Hostinger
                    <br />Numéro de SIRET : 514 148 014 000 12
                </span>
            </main>
            <footer>
                <Charte />
            </footer>
        </div>
    );
};

export default MentionsLegales;