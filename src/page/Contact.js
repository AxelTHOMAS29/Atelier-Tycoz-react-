import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Contactform from '../components/ContactForm'
import Charte from '../components/Charte';
import { motion } from "framer-motion";
import { test1, transition } from "../animation/animation";
import { faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <motion.div className='contact' initial='out' animate='in' exit='out' variants={test1} transition={transition}>
            <div className='contact-container'>
                <Navigation />
                <header>
                    <Logo />
                    <h1>Nos contact</h1>
                </header>
                <main>
                    <Contactform />
                    <div className='icon-main'>
                        <div className='icon-container'>
                            <a href="https://www.linkedin.com/in/nathalie-bennasar-ateliertycoz/" rel="noreferrer lien vers mon profil Linkedin" target="_blank" className='linkLinkedin icon'>
                                <FontAwesomeIcon icon={faLinkedin} alt='Atelier Ty Coz Linkedin' />
                            </a>
                            <a href="https://www.instagram.com/ateliertycoz/" rel="noreferrer lien vers mon profil Instagram" target="_blank" className='linkInstagram icon'>
                                <FontAwesomeIcon icon={faInstagram} alt='Atelier Ty Coz Instagram' />
                            </a>
                            <a href="https://www.youtube.com/channel/UCZZ-zTtR1kDnG1wykQaTs4w?view_as=subscriber" rel="noreferrer lien vers mon profil Youtube" target="_blank" className='linkYoutube icon'>
                                <FontAwesomeIcon icon={faYoutube} alt='Atelier Ty Coz Youtube' />
                            </a>
                        </div>
                    </div>
                </main>
                <footer>
                    <Charte />
                </footer>
            </div>
        </motion.div>
    );
};

export default Contact;