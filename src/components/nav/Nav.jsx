import React from 'react'
import './nav.css'
import {useState} from 'react'
import {FaSun} from 'react-icons/fa'
import {BiPlanet} from 'react-icons/bi'
import {GiRingedPlanet} from 'react-icons/gi'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import {GiJupiter} from 'react-icons/gi'
import {SiGoogleearth} from 'react-icons/si'
import {BsFillCircleFill} from 'react-icons/bs'
/**
 * Every individual jsx component will be given an id so the nav knows where each "#" leads at
 * "#" is set active by default and current active entry is updated with "useState" by clicking at navbar buttons
 * if active nav is equal to '#' it gets the 'active' class otherwise it remains empty
 */

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaSun/></a>
      <a href="#mercury" onClick={() => setActiveNav('#mercury')} className={activeNav === '#mercury' ? 'active' : ''}><BsFillCircleFill/></a>
      <a href="#venus" onClick={() => setActiveNav('#venus')} className={activeNav === '#venus' ? 'active' : ''}><SiGoogleearth/></a>
      <a href="#earth" onClick={() => setActiveNav('#earth')} className={activeNav === '#earth' ? 'active' : ''}><GiEarthAfricaEurope/></a>
      <a href="#mars" onClick={() => setActiveNav('#mars')} className={activeNav === '#mars' ? 'active' : ''}><SiGoogleearth/></a>
      <a href="#jupiter" onClick={() => setActiveNav('#jupiter')} className={activeNav === '#jupiter' ? 'active' : ''}><GiJupiter/></a>
      <a href="#saturn" onClick={() => setActiveNav('#saturn')} className={activeNav === '#saturn' ? 'active' : ''}><GiRingedPlanet/></a>
      <a href="#neptune" onClick={() => setActiveNav('#neptune')} className={activeNav === '#neptune' ? 'active' : ''}><BiPlanet/></a>
      <a href="#uranus" onClick={() => setActiveNav('#uranus')} className={activeNav === '#uranus' ? 'active' : ''}><BiPlanet/></a>
    </nav>
  )
}

export default Nav