import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/seojun-chung-aa3067252/', '_blank')}/>
          <GithubIcon onClick={()=> window.open('https://github.com/seojungood')}/>
          <EmailIcon onClick={()=> window.open('mailto:seojungood@gmail.com')}/>
      </div>
      <p> &copy; 2022 Seojun-Chung-Portfolio</p>
    </div>
  )
}

export default Footer