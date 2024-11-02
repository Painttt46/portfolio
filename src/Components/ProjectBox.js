import React from 'react';
import {FaGithub} from "react-icons/fa";



const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    KmunityDesc : "Developed a library service application for user with an admin backend system for managing services.",
    KmunityGithub : "https://github.com/Painttt46/LibaryApp_Flutter_Firebase",
    

    RiceGuardDesc : "Developed a mobile application for detecting rice leaf diseases with google map for share diseases location and forum for experience about rice ",
    RiceGuardGithub : "https://github.com/Slippy03/Project_2024",
    

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox