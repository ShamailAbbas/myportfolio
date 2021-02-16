import { React, useRef } from 'react'
import '../src/css/main.css'
import logo from '../src/images/logoimg.PNG'
import menuicon from '../src/images/menuicon.PNG'
import close from '../src/images/close.PNG'
import aaa from './images/aaa.jpg'
import work from './images/work.jpg'
const Main = () => {
  const menuref = useRef('')
  const togglemenu = () => {
    if (menuref.current.classList.contains('displaymenu')) {
      menuref.current.classList.toggle('closemenu')
      return
    }
    menuref.current.classList.toggle('displaymenu')
  }

  return (
    <div className='container'>
      <div className='nav'>
        <img src={logo} alt={logo} className='logo' />
        <img
          src={menuicon}
          alt={menuicon}
          className='menuicon'
          onClick={() => togglemenu()}
        />
        <div className='menuitems' ref={menuref}>
          <img
            src={close}
            alt={close}
            className='close'
            onClick={() => togglemenu()}
          />
          <h6>About</h6>
          <h6>Experience</h6>
          <h6>Work</h6>
          <h6>Contact</h6>
          <button className='resume'>Resume</button>
        </div>
      </div>
      <div className='hero'>
        <p className='firstline'>Hi, my name is</p>
        <h2 className='name'>Shamail Abbas.</h2>
        <h2 className='intro'>I build things for the web.</h2>
        <p className='introparagraph'>
          I'm a software engineer based in Boston, MA specializing in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between.
        </p>
        <button className='resume getintouch'>Get In Touch</button>
      </div>
      <div className='aboutsection'>
        <div className='aboutcontent'>
          <h2 className='aboutme'>About Me</h2>
          <p className='aboutpara'>
            Hello! I'm Brittany, a software engineer based in Boston, MA.
          </p>
          <p className='aboutpara'>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p className='aboutpara'>
            Shortly after graduating from Northeastern University, I joined the
            engineering team at Upstatement where I work on a wide variety of
            interesting and meaningful projects on a daily basis.
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
      <div className='worksection'>
        <div className='left'>
          <h2 className='things'>Some Things I’ve Built</h2>
          <img src={work} alt={work} className='workimage' />
        </div>
        <div className='right'>
          <p className='featuredprojects'>Featured Project</p>
          <h2 className='Octoprofile'>OctoProfile</h2>
          <p className='githubprofile'>
            A nicer look at your GitHub profile and repository stats with data
            visualizations of your top languages and stars. Sort through your
            top repos by number of stars, forks, and size.
          </p>
          <div className='places'>
            <li>Next.js</li>
            <li>Chart.js</li>
            <li>Github</li>
            <li>API</li>
          </div>
        </div>
      </div>
      <div className='archivesection'>
        <div className='worthyprojects'>
          <div className='griditems'>
            <h3>Integrating Algolia Search with WordPress Multisite</h3>
            <p>
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </p>
          </div>
          <div className='griditems'>222</div>
          <div className='griditems'>333</div>
          <div className='griditems'>444</div>
          <div className='griditems'>555</div>
          <div className='griditems'>666</div>
        </div>
      </div>
    </div>
  )
}

export default Main
