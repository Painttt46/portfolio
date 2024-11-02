import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RicemainImage from '../images/Ricemain.png';
import kmunityImage from '../images/KMain.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={RicemainImage} projectName="RiceGuard" />
        <ProjectBox projectPhoto={kmunityImage} projectName="Kmunity" />
      </div>

    </div>
  )
}

export default Projects