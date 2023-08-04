
import React from 'react'
import styles from './style';
import { Routes, Route } from 'react-router-dom';

import Home  from "./pages/Home";
import Episodes from './pages/Episodes';
import Contact from './pages/Contact';
import About from './pages/About';
import Speakers from './pages/Speakers';

const App = () => {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/team" element={<About />} />
          <Route path="/speakers" element={<Speakers />}/>
       </Routes>
    </>
 );
  
  
};

export default App