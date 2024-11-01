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
          <h2>Programmer and student who enjoys coding</h2>
          <h2>and like to learning new things and exploring fresh ideas.</h2>
          <br />
          <br/>
          <p className="scroll-down">
            <a href="#intro" className="scroll-button">
              My introduction
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
              I am a fourth-year student at King Mongkut's University of
              Technology North Bangkok, studying in Bachelor of Engineering
              Program in Industrial Engineering Technology with in
              electronic-computer branch
              <br />
              <br />I am fluent in <b>C++</b> and know a bit of <b>Python</b>{" "}
              and am working on a few projects in the <b>MERN</b> stack.
              <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
              <b> Typescript</b> in the near future. <br />
              <br />
              Also, I love <b>coffee</b>{" "}
              <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
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
