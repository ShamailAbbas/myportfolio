import React from 'react'
import '../css/featuredprojects.css'
import work from '../images/Amazonpic.jpg'
const Featuredprojects = () => {
  return (
    <div className='worksection'>
      <a
        href='https://amazonclonebyshamail.netlify.app/'
        rel='noreferrer'
        target='_blank'
        className='link'
      >
        <div className='left'>
          <h2 className='things'>Some Things I’ve Built</h2>

          <img src={work} alt={work} className='workimage' />
        </div>
      </a>
      <div className='right'>
        <p className='featuredprojects'>Featured Project</p>
        <h2 className='Octoprofile'>Amazon Clone</h2>
        <p className='githubprofile'>
          <strong>
            A pixel perfect clone of amazone which is fully responsive and has
            all the functionalities such as
          </strong>
          <br />
          <li> User Authantication</li>
          <li>Payment integration</li>
          <li>Database Integration</li>
          <li>AdminDashboard</li>
          <li> UserDashboard</li>
        </p>
        <div className='places'>
          <li>Reactjs</li>
          <li>Redux</li>
          <li>Github</li>
          <li>API</li>
        </div>
      </div>
    </div>
  )
}

export default Featuredprojects
