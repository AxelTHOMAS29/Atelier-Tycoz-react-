import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './page/Contact';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Cookies from './page/Cookies';
import { AnimatePresence } from "framer-motion";
import PortFolio from './page/PortFolio';
import Prestations from './page/Prestations';
import MentionLeglas from './page/MentionsLegales';

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/portfolio" exact element={<PortFolio />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/mentionsLegales" element={<MentionLeglas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
