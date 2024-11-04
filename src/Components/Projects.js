import React from 'react';
import ProjectBox from './ProjectBox';

import RicemainImage from '../images/Ricemain.png';
import kmunityImage from '../images/KMain.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RicemainImage} projectName="RiceGuard" />
        <ProjectBox projectPhoto={kmunityImage} projectName="Kmunity" />
      </div>

    </div>
  )
}

export default Projects