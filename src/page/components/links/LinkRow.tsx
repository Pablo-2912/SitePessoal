import React from 'react';
import GithubIcon from './icons/github/githubIcon';
import LinkedInIcon from './icons/linkedin/linkedinIcon';
import EmailIcon from './icons/email/emailIcon';
import WhatsAppIcon from './icons/zap/whatsappIcon';
import './LinkRow.css'

const LinkRow: React.FC = () => {
  return (
<div className="linkRow-container d-flex justify-content-center align-items-center">
      <div className="icons-row d-flex gap-4">
        <div className="icon-box">
          <GithubIcon />
        </div>
        <div className="icon-box">
          <LinkedInIcon />
        </div>
        <div className="icon-box">
          <EmailIcon />
        </div>
        <div className="icon-box">
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
};

export default LinkRow;
