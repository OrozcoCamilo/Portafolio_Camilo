import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaGithub, FaEye } from 'react-icons/fa'; // Añadiendo íconos de GitHub y vista previa

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a la API de GitHub para obtener repositorios
    fetch('https://api.github.com/users/OrozcoCamilo/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los proyectos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-cards">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <div className="image-container">
              <img src={`https://github.com/${repo.owner.login}.png`} alt={repo.name} />
            </div>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="project-links">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="view-button">
                <FaEye /> Ver Proyecto
              </a>
              <a href={`https://github.com/${repo.owner.login}/${repo.name}`} target="_blank" rel="noopener noreferrer" className="github-button">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



