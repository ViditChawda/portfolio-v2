import React from 'react'
import './aboutme.css'
import mypic from '../../assests/mypic.png'

const Aboutme = () => {
    return (
        <div className='m-container'>
            <div className='aboutme-main-container' id="aboutme">
                <div></div>
                <h1>About Me</h1>
                <div></div>
            </div>
            <div className='my-content'>
                <div className='my-pic'>
                    <img src={mypic} alt="" height={900} width={700} />
                </div>
                <div className='my-description'>
                    <span>Hello and welcome to my portfolio website!</span> My name is <span>Vidit Chawda</span>, and I am a 3rd-year Computer Science Engineering student at GH Raisoni College of Engineering. I am passionate about using technology to solve complex problems and create innovative solutions.

                    Throughout my academic career, I have gained expertise in various programming languages, including <span>C++, JavaScript, HTML, and CSS</span>. <br /> <br /> I have also developed skills in various frameworks such as <span>Tailwind, React.js, Next.js, Node.js, and Three.js</span>. I am constantly seeking new challenges to learn and grow my technical skills.

                    As a good team player with strong leadership skills, I thrive in collaborative environments. I enjoy working in a team setting where I can share my ideas and learn from others. Additionally, <br /> <br /> I have experience <span>mentoring</span> others and helping them improve their skills.

                    In my free time, I enjoy working on personal projects and exploring new technologies. One of my significant achievements was working on an app development project using Kotlin, which helped me to gain practical experience and apply my theoretical knowledge.

                    Thank you for visiting my portfolio website. If you would like to learn more about my skills or have a project you'd like to discuss, please feel free to reach out to me.
                </div>
            </div>

        </div>

    )
}

export default Aboutme
