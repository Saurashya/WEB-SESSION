import React from 'react'
import Nav from './pages/Nav'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Works from './pages/Works'

const App = () => {
  return (
    <div>
      <Nav/>
      <HomePage/>
      <AboutPage/>
      <Works/>
    </div>
  )
}
export default App