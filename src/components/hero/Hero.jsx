import React from 'react'
import bg from '../../assests/hero.jpg'
import dp from '../../assests/dp.jpg'
import arw from '../../assests/arrow.png'
import { GrLinkedinOption } from 'react-icons/gr'
import { RxTwitterLogo } from 'react-icons/rx'
import { RxInstagramLogo } from 'react-icons/rx'
import { AiFillGithub } from 'react-icons/ai'
import './hero.css'

const Hero = () => {
  return (
    <div className='main-container1'>
      <section id="home">
        <div className='hero-container'>
          <img src={bg} alt="" height={350} className="hero-bg" />
          <img src={dp} alt="" height={200} width={200} className="hero-dp" />
        </div>

       
        <div className='bottom-hero'>
          <div className='main-container'>
            <h1>Vidit Chawda</h1>
            <p>I am a computer Science engineering student</p>
          </div>
          {/* <img src="" alt="" height={20} width={50} /> */}
          <div>
            <a href="https://drive.google.com/file/d/1cJzN988zfwvqIYoN-QJnIKWl_7nh1VOi/view">
              <button className='hire-button' onClick="https://drive.google.com/file/d/1cJzN988zfwvqIYoN-QJnIKWl_7nh1VOi/view">Download Resume</button>
            </a>
          </div>
        </div>
        <div className='hero-icons'>
          <a href="https://www.linkedin.com/in/vidit-chawda-b4a740210/"> <GrLinkedinOption /> </a>
          <a href="https://twitter.com/ViditChawda723"> <RxTwitterLogo /> </a>
          <a href="https://github.com/ViditChawda"> <RxInstagramLogo /> </a>
          <a href="https://github.com/ViditChawda?tab=repositories"> <AiFillGithub /> </a>
        </div>

       
      </section>
    </div>

  )
}

export default Hero