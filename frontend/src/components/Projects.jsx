import React from 'react';
import debt from '../images/debt.png'
import portfolio from '../images/portfolio.png'
import insurance from '../images/paaikkuna.png'
import kauppa from '../images/OHJ.png'

const Projects = () => {
  const projectList = [
    {
      title: 'Debt - map',
      description: 'Single-page app that allows users to explore debt rates in different countries',
      link: 'https://github.com/osterava/TIEA207_Projekti',
      imageUrl: debt
    },
    {
      title: 'Insurance app',
      description: 'Insurance app. Customer can handle its own insurances from one app. University project',
      link: 'https://github.com/osterava/VakuutusetOHJ2',
      imageUrl: insurance
    },
    {
        title: 'Portfolio',
        description: 'This react app - my portfolio',
        link: 'https://github.com/osterava/portfolio_olli_terava',
        imageUrl: portfolio
      },
      {
        title: 'My first game with C# ',
        description: 'Player can do groceries in this 2D game.',
        link: 'https://github.com/osterava/OHJ1-ty-',
        imageUrl: kauppa
      },
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
