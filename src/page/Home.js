import React from 'react';
import Navigation from "../components/Navigation";
import { faHouse, faPeopleArrowsLeftRight, faClock, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Charte from "../components/Charte";
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {

    const slideInLeft = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            x: -100,
        },
            {
                opacity: 1,
                x: 0,
                delay: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    
                }
            }
        )
    }

    useEffect(() => {
        slideInLeft('.methodes-txt');
    }, [])

    const slideInRight = (elem) => {
        gsap.fromTo(
            elem, {
            opacity: 0,
            x: 100,
        },
            {
                opacity: 1,
                x: 0,
                delay: 0.3,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    
                }
            }
        )
    }

    useEffect(() => {
        slideInRight('.propos-txt');
    }, [])

    useEffect(() => {
        slideInLeft('.methodes-txt');
    }, [])


    return (
        <motion.div className="home" initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <Navigation />
            <header>
                <div className="video-container">
                    <video className="video-TyCoz"
                        src="./img/video/Projet R Atelier TY COZ_2.mp4" type="video/mp4"
                        muted
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        loop
                        alt="video pr??sentation Atelier TyCoz"
                    ></video>
                    <img src="./img/LOGO ATELIER avril 2022 d.png" className="video-logo" alt='logo' />
                </div>
            </header>
            <main className="information">
                <div className="methodes-container">
                    <div className="methodes-txt">
                        <h1>Notre Concept</h1>
                        <span className="methodes-txt-span">Nous voulons vous aider ?? concevoir et ?? visualiser votre projet de construction, de r??novation ou d???am??nagement int??rieur gr??ce ?? la technologie 3D.
                            Notre prestation de homestaging 3D peut aussi ??tre utilis??e pour faciliter la vente d???un bien immobilier.
                            <br />Atelier TY COZ est une micro-entreprise de dessin en b??timent qui vous aidera ?? vous projeter et ?? clarifier vos projets !
                        </span>
                    </div>
                    <img className="methodes-img" src="./img/atelier ty coz perspective 3D interieure s??jour loc.jpg" alt='concept Atelier TyCoz' />
                </div>
                <div className="experience-container">
                    <div className="experience-container-txt">
                        <FontAwesomeIcon icon={faHouse} alt='home' className="experience-icon" />
                        <div>
                            <h2>5</h2>
                            <span>Types de visualisations</span>
                        </div>
                    </div>
                    <div className="experience-container-txt">
                        <FontAwesomeIcon icon={faPeopleArrowsLeftRight} alt='interlocuteur' className="experience-icon" />
                        <div>
                            <h2>1</h2>
                            <span>Interlocuteur unique</span>
                        </div>
                    </div>
                    <div className="experience-container-txt">
                        <FontAwesomeIcon icon={faClock} alt='D??lai' className="experience-icon" />
                        <div>
                            <h2>10</h2>
                            <span>Jours de d??lai</span>
                        </div>
                    </div>
                    <div className="experience-container-txt">
                        <FontAwesomeIcon icon={faHandshake} alt='confiance' className="experience-icon" />
                        <div>
                            <h2>15</h2>
                            <span>Ans d'exp??rience</span>
                        </div>
                    </div>
                </div>
                <div className="Propos-container">
                    <img src="./img/atelier ty coz perspective 3D interirure loc.jpg" className="propos-img" alt='propose Atelier TyCoz' />
                    <div className="propos-txt">
                        <h1>?? propos de nous</h1>
                        <span>
                            ?? Je suis dessinatrice en b??timent depuis plus de 15 ans. En travaillant pour des constructeurs de maisons individuelles, je me suis rendue compte que beaucoup de clients avaient des difficult??s ?? lire des plans classiques et ?? visualiser des volumes qui par d??finition n???existent pas encore. Pourtant, chaque projet est important : il doit r??pondre ?? des attentes fortes, prendre en compte les pr??f??rences de chacun et correspondre au final ?? ce que le client avait imagin??.
                            <br />Ma d??marche consiste donc ?? clarifier le projet gr??ce ?? la technologie 3D pour faciliter la prise de d??cision et simplifier ensuite les travaux. ??</span>
                    </div>
                </div>
            </main>
            <footer>
                <Charte />
            </footer>
        </motion.div>
    );
};

export default Home;