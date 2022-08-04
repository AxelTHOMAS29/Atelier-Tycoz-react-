import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const PortFolio = () => {

    return (
        <motion.div className='portFolio' initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <Navigation />
            <main className='scroll'>
                <section className='test1'>
                    <img src='../img/atelier ty coz perspective Projet C.jpg' className='maison-img' alt='portfolio Atelier TyCoz'></img>
                    <div className='arrow-container'>
                        <FontAwesomeIcon icon={faArrowRotateLeft} alt='arrow rotate' className="arrow-icon" />
                        <span>Tournez votre appareil pour un meilleur confort</span>
                    </div>
                </section>
                <section className='test2'>
                    <img src='../img/atelier ty coz perspective Projet K2.jpg' className='maison-img' alt='maisons Atelier TyCoz'></img>
                    <div className='arrow-container'>
                        <FontAwesomeIcon icon={faArrowRotateLeft} alt='arrow rotate' className="arrow-icon" />
                        <span>Tournez votre appareil pour un meilleur confort</span>
                    </div>
                </section>
                <section className='test3'>
                    <img src='../img/atelier ty coz perspective Projet R.jpg' className='maison-img' alt='maisons2 Atelier TyCoz'></img>
                    <div className='arrow-container'>
                        <FontAwesomeIcon icon={faArrowRotateLeft} alt='arrow rotate' className="arrow-icon" />
                        <span>Tournez votre appareil pour un meilleur confort</span>
                    </div>
                </section>
                <section className='test5'>
                    <img src='../img/atelier ty coz perspective 3D interieure séjour loc.jpg' className='maison-img' alt='maisons2 interieur'></img>
                    <div className='arrow-container'>
                        <FontAwesomeIcon icon={faArrowRotateLeft} alt='arrow rotate' className="arrow-icon" />
                        <span>Tournez votre appareil pour un meilleur confort</span>
                    </div>
                </section>
                <section className='test4'>
                    <span className='Elorn'>Les projets présentés sur cette page ont été réalisés pour l'entreprise
                        <a href='https://www.elorn-constructions.fr/' target="_blank" className='Elorn-link' rel="noreferrer"> Elorn Constructions.</a>
                    </span>
                    <div className='charte-test'>
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
                </section>
            </main>
        </motion.div>
    );
};

export default PortFolio;