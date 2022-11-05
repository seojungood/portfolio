import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon />
        <GithubIcon />
        <EmailIcon />
      </div>
      <p> &copy; 2022 Seojun-Chung-Portfolio</p>
    </div>
  )
}

export default Footer