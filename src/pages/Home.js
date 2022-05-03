import React, { Component } from 'react'
import Projects from '../components/Projects'
import { Contact } from '../components/Contact'
import skills_mock_data from '../mock_data/skills_mock_data'

import speakingPerson from '../assets/person/speakingPerson.png'
import workingPerson from '../assets/person/workingPerson.png'
import wavingPerson from '../assets/person/wavingPerson.png'

import '../style/main.css'

class Home extends Component {
 render(){
   return(
    <div className='home'>

      <section className='intro'>
        <div>
        <h1>hello, my name is <span>Viktor Van Hulle</span></h1>
        <h3>I am a Web developer and student at <span>HoGent</span> as a bachelor in Applied Computer Science</h3>
        </div>
      </section>

      <section className='projects-section'>
        <div className='speakingPerson'>
        {/* THREE JS - test image*/}
        <img src={speakingPerson} id='testImage_projects' className='test'></img>
        </div>
        <div className='projects-wrapper'>
          <Projects />
        </div>
      </section>

      <div className='skillset'>
        <div className='skillset-innercontainer'>
          {skills_mock_data.map((item, key) => {
            return(
              <div>
                <p>{item.title}</p>
                <div key={key} className='skill-container'>
                  <div className={`skill ${item.percentage}`}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <section className='contact-section'>
        <div className='three-container'>
        {/* THREE JS - test image*/}
        <img src={workingPerson} id='testImage_contact' className='test'></img>
        </div>
        <div className='contact-wrapper'>
          <h1>Feel free to contact me.</h1>
          <Contact/>
        </div>
      </section>

    </div>
   )
 }
}  

export default Home