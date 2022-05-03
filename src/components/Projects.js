import React from 'react'
import projects_mock_data  from '../mock_data/projects_mock_data'
import Stars from './Stars'

export default function Projects() {
  return (
    <div className='projects'>
      {projects_mock_data.map((item, key) => {
        return(
          <div key={key} className='flip-card'>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={item.image} alt={`${item.title} logo`}></img>
              </div>
              <div class="flip-card-back">
                <h3>{item.title}</h3>
                <div className='stars'>
                  <Stars amount={item.stars}/>
                </div>
                <p>{item.review}</p>
                <button><a href={item.url}>Visit website</a></button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
