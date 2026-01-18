import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Project from './Pages/Project.jsx';
import Pages from './Pages/Pages.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
