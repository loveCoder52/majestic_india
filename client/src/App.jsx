import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Project from './Pages/Project.jsx';
import Pages from './Pages/Pages.jsx';
import Contact from './Pages/Contact.jsx';
import ConnectionTest from './Pages/ConnectionTest.jsx';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/test-connection' element={<ConnectionTest />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
