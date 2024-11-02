import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1,DiMysql,DiGoogleCloudPlatform} from "react-icons/di";
import {SiMongodb, SiPostman ,SiTensorflow,SiFlutter,SiFirebase} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Python : <FaPython/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Tensorflow : <SiTensorflow/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        
        Mysql : <DiMysql/>,
        Flutter : <SiFlutter/>,
        Firebase : <SiFirebase/>,
        GoogleCloudPlatform : <DiGoogleCloudPlatform/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
