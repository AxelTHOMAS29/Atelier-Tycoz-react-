import React from 'react';
import Charte from '../components/Charte';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Prestations = () => {

    const slideInTop = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            y: -30,
        },
            {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    
                }
            }
        )
    }

    useEffect(() => {
        slideInTop('.animation1');
    }, [])

    useEffect(() => {
        slideInTop('.animation2');
    }, [])

    useEffect(() => {
        slideInTop('.animation3');
    }, [])

    useEffect(() => {
        slideInTop('.animation4');
    }, [])

    useEffect(() => {
        slideInTop('.animation5');
    }, [])

    useEffect(() => {
        slideInTop('.animation6');
    }, [])

    useEffect(() => {
        slideInTop('.animation7');
    }, [])

    return (
        <motion.div initial='out' animate='in' exit='out' variants={test1} transition={transition} className='prestations'>
            <Navigation />
            <header>
                <Logo />
                <h1>Nos Prestations</h1>
            </header>
            <main>
                <div className='prestations-container'>
                    <div className='prestations-container-exemple prestations-container-exemple-V3'>
                        <div className='prestations-exemple animation1'>
                            <h2>Perspective 3D intérieure</h2>
                            <span>Visuel format Full HD. Pour visualiser le volume ou le futur aménagement d'une pièce</span>
                        </div>
                        <img src='./img/atelier ty coz microentreprise de dessin en bâtiment.png' className='prestations-img' alt='prestations Atelier TyCoz' />
                    </div>
                    <div className='prestations-container-exemple prestations-container-exemple-V2'>
                        <img src='./img/atelier ty coz perspective 3d E.png' className='prestations-img prestations-img-V2' alt='perspectives Atelier TyCoz' />
                        <div className='prestations-exemple animation2'>
                            <h2 className='prestations-title'>Perspective 3D extérieure</h2>
                            <span className='prestations-txt'>Visuel format Full HD. Pour visualiser le volume ou le futur aménagement d'une pièce</span>
                        </div>
                    </div>
                    <div className='prestations-container-exemple prestations-container-exemple-V3'>
                        <div className='prestations-exemple animation3'>
                            <h2>Plan 3D ou axonométrie</h2>
                            <span>Visuel format Full HD. Pour avoir une vue globale de votre futur aménagement.</span>
                        </div>
                        <img src='./img/atelier ty coz plan 3d.png' className='prestations-img prestation-img-V3' alt='plan 3D Atelier TyCoz' />
                    </div>
                    <div className='prestations-container-exemple prestations-container-exemple-V2'>
                        <img src='./img/atelier ty coz perspective 3d A.png' className='prestations-img prestations-img-V2' alt='VR Atelier TyCoz' />
                        <div className='prestations-exemple animation4'>
                            <h2 className='prestations-title'>VR Objet</h2>
                            <span className='prestations-txt'>Rotation 3D autour de votre projet en utilisant un simple navigateur ou un casque de réalité virtuelle</span>
                        </div>
                    </div>
                    <div className='prestations-container-exemple prestations-container-exemple-V3'>
                        <div className='prestations-exemple animation5'>
                            <h2>Visite virtuelle</h2>
                            <span>Visite 3D à l'intérieur de votre projet en utilisant un simple navigateur ou un casque de réalité virtuelle.</span>
                        </div>
                        <img src='./img/atelier ty coz microentreprise de dessin en bâtiment.png' className='prestations-img prestation-img-V3' alt='visite virtuelle Atelier TyCoz' />
                    </div>
                    <div className='prestations-container-exemple prestations-container-exemple-V2'>
                        <img src='./img/atelier ty coz perspective 3d D.png' className='prestations-img prestations-img-V2' alt='animation' />
                        <div className='prestations-exemple animation6'>
                            <h2 className='prestations-title'>Animation 3D</h2>
                            <span className='prestations-txt'>Votre projet en vidéo ! Choisissez un parcours, animez le soleil et les nuages pour voir votre projet plus clairement.</span>
                        </div>
                    </div>
                    <div className='prestations-container-exemple prestations-container-exemple-V3'>
                        <div className='prestations-exemple animation7'>
                            <h2>Plan 2D</h2>
                            <span>Plans de constructions sur mesures prêt à être confiés au chef de chantier</span>
                        </div>
                        <img src='./img/atelier ty coz plan façade C.png' className='prestations-img' alt='Plan 2D' />
                    </div>
                </div>
            </main>
            <footer>
                <Charte />
            </footer>
        </motion.div>
    );
};

export default Prestations;