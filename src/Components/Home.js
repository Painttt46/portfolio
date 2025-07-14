import React from "react";
import Lottie from "lottie-react";
import Webanima from "../LottieFiles/web-aima.json";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/PAINT.jpg"
import { CiCoffeeCup } from "react-icons/ci";


const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            My Name is <b>Veraprat Kladlex</b>
          </h1>
          <h2>Senior Programmer and student who enjoys coding</h2>
          <h2>and like to learning new things and exploring fresh ideas.</h2>
          <br />
          <br/>
          <p className="scroll-down">
            <a href="#intro" className="scroll-button">
              <h3>My introduction</h3>
            </a>
          </p>
        </div>
        <Lottie className="illustration" animationData={Webanima} loop={true} />
      </div>
      <section id="intro">
        <div className="AboutPage">
          <div className="AboutText">
            <h1 className="AboutTextHeading">
              Veraprat <b>introduction</b>
            </h1>
            <p>
              
              
              <br />I am fluent in <b>Python</b> and <b>Dart</b> with bit normal knowledge about <b>Html , Css , JavaScript</b>{" "}
              and have try internship at <b>United Information Highway Company (UIH)</b>
              <br />I plan to learn <b>new tools / skill</b> for improve myself <br />
              <br />
              In free time i watch movie , play game and a bit read the article. My nature is a quiet person but will talkative with Acquaintance and i also have much positive thinking because it will make my live happy.
             
              
            </p>
          </div>
          <Tilt>
            <img className="Avatar" src={Avatar} alt="" />
          </Tilt>
        </div>
      </section>
    </div>
  );
};

export default Home;
