import React from 'react'
import './header.css'
import sun from '../../assets/sun.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome to</h5>
        <h1>The Solar System</h1>
        <h5 className="text-light">Feat. our very own Sol...</h5>
        <div className="sun">
          <img src={sun} alt="sun" />
        </div>
      </div>
    </header>
  )
}

export default Header