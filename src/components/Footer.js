// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Camilo. Todos los derechos reservados.</p>
      <div className="social-links">
        {/* Enlaces actualizados a tus redes sociales */}
        <a href="https://github.com/OrozcoCamilo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/camilo-orozco-692428333/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;


