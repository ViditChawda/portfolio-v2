import React from 'react'
import './skills.css'
import mypic3 from '../../assests/mypic3.png'

const Skills = () => {
  return (
    <div className='s-container'>
      <div className='skill-main-container' id="skills">
        <div></div>
        <h1>Skills</h1>
        <div></div>
      </div>
      <div className='skills-content'>
        <div>
          <img src={mypic3} alt="" className='mypic3' />
        </div>
      </div>

    </div>

  )
}

export default Skills