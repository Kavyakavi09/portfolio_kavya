import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
          Hi
          <span className='wave'>👋🏻</span>, My Name is{' '}
          <span className='name-shadow'>Kavya</span>
        </h2>

        <h1>
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'MERN Stack Dev',
                'NodeJs Developer',
                'ReactJS Developer',
                'Open Source Contributor',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating.
            Basically, I am a Mathematician. Exited to learn programming and
            happy to learn new technologies. I want to explore my knowledge in
            the web development field.
          </p>
          <a
            href='https://github.com/Kavyakavi09'
            target='_blank'
            rel='noreferrer'>
            <GithubIcon />
          </a>
          <a
            href='mailto:kavyakaruppusamy09@gmail.com'
            target='_blank'
            rel='noreferrer'>
            <EmailIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/kavyakaruppusamy/'
            target='_blank'
            rel='noreferrer'>
            <LinkedInIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/kavyakaruppusamy/'
            target='_blank'
            rel='noreferrer'>
            <button className='resume-btn'>Resume</button>
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Styled
              Components,ChartJS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, AWS S3,</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Python, C,</span>
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <span>
              VS Code, Postman, Netlify, Heroku, Render, Jira, Git, Github
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
