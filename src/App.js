import React, { Component, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import skills_mock_data from "./mock_data/skills_mock_data";

import "./style/main.css";
import SpeakingPerson from "./models/SpeakingPerson";
import WavingPerson from "./models/WavingPerson";
import WorkingPerson from "./models/WorkingPerson";

import { OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar/Navbar";
import ViktorVanHulle from "./assets/ViktorVanHulle.jpg";
import CV from "./assets/Curriculum vitae.pdf";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home">
          <section className="intro">
            <Canvas camera={{ fov: 20, position: [4, 0, 10] }}>
              <Suspense fallback={null}>
                <ambientLight />
                <WavingPerson position={[3, -1.85, 2]} />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[3, 100, 10]}
                  castShadow
                />
              </Suspense>
            </Canvas>
            <div>
              <h1>
                hello, my name is <br className="brake"></br>
                <span>Viktor Van Hulle</span>
              </h1>
              <h3>
                I am a Web developer and student at <span>HoGent</span> studying
                Applied Computer Science
              </h3>
            </div>
          </section>

          <section className="about-section" id="about">
            <img src={ViktorVanHulle} alt="Viktor Van Hulle"></img>
            <div>
              <h1>About me.</h1>
              <p>
                Hi, my name is Viktor Van Hulle. I am a 20 year old web
                developer and student studying for a bachelor in Applied
                Computer Science at HoGent. In my free time I like to make
                websites. It's something I can fully immerse myself in.
                Currently I only have had the privilege of building 2 websites
                for other people. So if you are looking for someone to make you a website
                that is both creative, immersive and something
                worthwhile visiting, you can always contact me on my social media
                or through the <a href="#contact">Contact form</a> on this
                website.
              </p>
            </div>
          </section>

          <div id="resume">
            <p>Click on the button to download my resume.</p>
            <a href={CV} download="Curriculum vitae">
              Download resume
            </a>
          </div>

          <section className="projects-section" id="projects">
            <div className="speakingPerson">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight />
                  <SpeakingPerson position={[0, -1, 2]} />
                  <spotLight
                    intensity={0.8}
                    angle={0.1}
                    penumbra={1}
                    position={[13, 3, 20]}
                    castShadow
                  />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    maxAzimuthAngle={Math.PI / 8}
                    minAzimuthAngle={-Math.PI / 6}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div className="projects-wrapper">
              <Projects />
            </div>
          </section>

          <div className="skillset">
            <h1>Skills</h1>
            <div className="skillset-innercontainer">
              {skills_mock_data.map((item, key) => {
                return (
                  <div>
                    <p>{item.title}</p>
                    <div key={key} className="skill-container">
                      <div className={`skill ${item.percentage}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <section className="contact-section" id="contact">
            <div>
              <Canvas
                className="workingPerson"
                camera={{ fov: 30, position: [-10, 0, 10] }}
              >
                <Suspense fallback={null}>
                  <ambientLight />
                  <WorkingPerson position={[0, -2, 3]} />
                  <spotLight
                    intensity={0.9}
                    angle={0.1}
                    penumbra={3}
                    position={[10, 5, 5]}
                    castShadow
                  />
                  <OrbitControls
                    enablePan={true}
                    enableZoom={false}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 5}
                    minAzimuthAngle={-Math.PI / 4}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div className="contact-wrapper">
              <h1>Feel free to contact me.</h1>
              <Contact />
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
