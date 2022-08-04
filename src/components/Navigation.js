import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faLinkedin, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  const hideSidebar = () => setSidebar(false);

  return (
    <nav className="navigation">

      <div className='buttonNav'>
        <div className='navbar' onClick={showSidebar}>
          <span className='menu-bars'></span>
          <span className='menu-bars'></span>
          <span className='menu-bars'></span>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className='cross' onClick={hideSidebar}>
          &times;
        </div>
        <ul className='nav-menu-items' onClick={showSidebar}>

          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/prestations"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Prestations</li>
          </NavLink>
          <NavLink to="/portfolio" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>PortFolio</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Contact</li>
          </NavLink>
        </ul>
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
      </nav>


    </nav>
  );
};

export default Navigation;