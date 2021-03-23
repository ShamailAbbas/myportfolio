import React from 'react'
import Main from '../src/components/Main'
import '../src/css/main.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Aboutpage from './components/Aboutpage'
import Workpage from './components/Workpage'
import Contactpage from './components/Contactpage'
import "./App.css"
const App = () => {
  return (
    <>
      <div className='container'>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/workpage' component={Workpage} />
          <Route exact path='/contactpage' component={Contactpage} />

          <Route exact path='/aboutpage' component={Aboutpage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </>
  )
}

export default App
