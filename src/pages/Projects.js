import React from 'react'
import Project from '../components/Project';
import SocialMedia from '../assets/SocialMedia.jpg';
import Spreadsheet from '../assets/Spreadsheet.jpg';
import '../styles/Project.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        <Project name="Social Media Website" image={SocialMedia}/>
        <Project name="Spreadsheet" image={Spreadsheet}/>
      </div>
    </div>
  ) 
}

export default Projects;