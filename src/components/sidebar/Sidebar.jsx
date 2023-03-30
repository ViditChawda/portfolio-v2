import React from 'react'
import './sidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineBorder } from 'react-icons/ai'
import { AiOutlineProfile } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


const Sidebar = () => {
  return (
    <BrowserRouter>
      <div className='side-nav'>
        <div><AiOutlineHome />
          <Link to="#home" smooth><h1>Home</h1></Link>
        </div>
        <div>
          <AiOutlineBorder />
          <Link to="#experiences" smooth><h1>Experience</h1></Link>
        </div>
        <div>
          <AiOutlineProfile />
          <Link to="#skills" smooth><h1>Skills</h1></Link>
        </div>
        <div>
          <BsPerson />
          <Link to="#aboutme" smooth><h1>About me</h1></Link>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default Sidebar