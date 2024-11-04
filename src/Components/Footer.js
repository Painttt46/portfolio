import React from 'react';
import {FaGithub,FaFacebook,FaInstagram} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      
      
      <div className='footerLinks'>
        <a href="https://github.com/Painttt46" target='_blank'><FaGithub/></a>
        <a href="https://mail.google.com/mail/?view=cm&to=vpaint345@gmail.com&su=Hello" target="_blank"><GrMail/></a>
        <a href="https://www.facebook.com/paint55" target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/px.intz/" target='_blank'><FaInstagram/></a>
        
        
      </div>
    </footer>
  )
}

export default Footer