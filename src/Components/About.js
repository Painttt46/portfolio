import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Veraprat Kladlex</b> and I am from Nonthaburi, Thailand. <br/>
            I am a fourth-year student at <b>King Mongkut's University of
            Technology North Bangkok</b>. <br/><br/>

            studying in Bachelor of Engineering Program in Industrial Engineering Technology with in electronic-computer branch

            I love to create Mobile app or Web app projects with AI Technology, you can check out some of my project in the projects section.<br/><br/>
            <br/>
          </p>
          <a href="#Skill" className="scroll-button">
              <o>Check My Skill</o>
            </a>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      <section id="Skill">
      <h1 className='SkillsHeading'>Professional Skill</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Tensorflow'/>
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Python'/>
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Mysql' />
        <Skills skill='Flutter' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Firebase' />
        <Skills skill='GoogleCloudPlatform' />
        
      </div>
      </section>
    </>
  )
}

export default About