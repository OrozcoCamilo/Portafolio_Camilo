// src/components/Inicio.js
import React from 'react';
import './Inicio.css'; // Asegúrate de crear el archivo de estilos

const Inicio = () => {
  // Funciones para manejar la redirección
  const handleNavigateProyectos = () => {
    window.location.href = '/proyectos';
  };

  const handleNavigateContacto = () => {
    window.location.href = '/contacto';
  };

  const handleNavigateCV = () => {
    window.location.href = '/mi-cv';
  };

  return (
    <section className="inicio">
      <div className="inicio-banner">
        <h1>Bienvenido a mi portafolio</h1>
        <p>Descubre más sobre mí y mis proyectos.</p>
        <div className="botones">
          <button onClick={handleNavigateProyectos}>Ver Proyectos</button>
          <button onClick={handleNavigateContacto}>Contactar</button>
        </div>
      </div>
      <div className="info-personal">
        <h2>Sobre mí</h2>
        <p>Soy Camilo, un desarrollador web apasionado por la creación de soluciones innovadoras.</p>
        
      </div>
    </section>
  );
}

export default Inicio;

