import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a
          href='https://github.com/Kavyakavi09'
          target='_blank'
          rel='noreferrer'>
          <GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/kavyakaruppusamy/'
          target='_blank'
          rel='noreferrer'>
          <LinkedInIcon />
        </a>
      </div>
      <p>
        {' '}
        &copy; {new Date().getFullYear()}{' '}
        <a
          href='https://kavyakaruppusamy.netlify.app/'
          style={{ textDecoration: 'none', color: 'inherit' }}
          target='_blank'
          rel='noreferrer'>
          Kavya Karuppusamy
        </a>
      </p>
    </div>
  );
}

export default Footer;
