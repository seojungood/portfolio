import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, I'm Seojun Chung</h2>
        <div className='prompt'>
          <p> 
            Software developer with a passion and ambition for learning and creating.
          </p>
          <button>Resume</button>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML, CSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              Firebase, ...Learning MySQL
            </span>
          </li>
          <li className='item'>
            <h2>Language</h2>
            <span>
              Javascript, Java, C#, Typescript
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;