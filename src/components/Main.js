import { React } from 'react'
import About from './About'
import Contact from './Contact'
import Featuredprojects from './Featuredprojects'
import Hero from './Hero'

import Otherprojects from './Otherprojects'
const Main = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Featuredprojects></Featuredprojects>
      <Otherprojects></Otherprojects>
      <Contact></Contact>
    </>
  )
}

export default Main
