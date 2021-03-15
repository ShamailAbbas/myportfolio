import React from 'react'
import '../css/hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <p className='firstline'>Hi, my name is</p>
      <h2 className='name'>Shamail Abbas.</h2>
      <h2 className='intro'>I build things for the web.</h2>
      <p className='introparagraph'>
        I'm a developer based in Karachi, Pakistan specializing in building (and
        occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
      <button className='resume getintouch'>
        <a
          href='https://www.upwork.com/o/profiles/users/~013da0d1e136a43cdd/'
          rel='noreferrer'
          target='_blank'
          className='btnlink'
        >
          Get In Touch
        </a>
      </button>
    </div>
  )
}

export default Hero
