import React from 'react'
import Header from '../components/Landing/Header'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Special from '../components/Special'
import Menu from '../components/Menu/Menu'
import Reservation from '../components/Reservation'
import MeetOutTeam from '../components/MeetOutTeam'
import Gallary from '../components/Gallary'
import GetInTouch from '../components/GetInTouch'
import LocateUs from '../components/LocateUs'

const Landing = () => {
  return (
   <>
   <Header/>
   <Navbar/>
   <About/>
   <Special/>
   <Menu/>
   <Reservation/>
   <MeetOutTeam/>
   <Gallary/>
   <GetInTouch/>
   <LocateUs/>
   </>
  )
}

export default Landing
