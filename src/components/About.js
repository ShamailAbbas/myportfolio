import React from 'react'
import aaa from '../images/aaa.jpg'
import '../css/about.css'
const About = () => {
  return (
    <div className='aboutsection'>
      <div className='aboutcontent'>
        <h2 className='aboutme'>About Me</h2>
        <p className='aboutpara'>
          Hello! I'm Shamail, a developer based in Karachi, Pakistan.
        </p>
        <p className='aboutpara'>
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
        </p>
        <p className='aboutpara'>
          Shortly after graduating from Mirpur University of Science and
          Technology, MUST AJK I joined the engineering team at ScaleX where I
          work on a wide variety of interesting and meaningful projects on a
          daily basis.
        </p>
        <p className='aboutpara'>
          Here are a few technologies I've been working with recently:
        </p>
      </div>
      <div className='photosection'>
        <div className='photocontainer '>
          <img src={aaa} alt={aaa} className='myphoto' />
        </div>
      </div>
    </div>
  )
}

export default About
