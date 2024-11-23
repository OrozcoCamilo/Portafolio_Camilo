// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <TransitionGroup className="main-content">
          <CSSTransition
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/contacto" element={<ContactForm />} />
              <Route path="/convertir-moneda" element={<CurrencyConverter />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




