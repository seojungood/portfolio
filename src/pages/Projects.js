import React from 'react'
import Project from '../components/Project';
import '../styles/Project.css';
import {ProjectList} from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project)=>{
          return <Project name={project.name} image={project.image} />
        })}
      </div>
    </div>
  ) 
}

export default Projects;