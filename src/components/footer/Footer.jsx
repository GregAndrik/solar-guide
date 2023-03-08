import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>THE SOLAR SYSTEM</a>

      <ul className='permalinks'>
        <li><a href='#'>Sol</a></li>
        <li><a href='#mercury'>Mercury</a></li>
        <li><a href='#venus'>Venus</a></li>
        <li><a href='#earth'>Earth</a></li>
        <li><a href='#mars'>Mars</a></li>
        <li><a href='#jupiter'>Jupiter</a></li>
        <li><a href='#saturn'>Saturn</a></li>
        <li><a href='#neptune'>Neptune</a></li>
        <li><a href='#uranus'>Uranus</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; GREG. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer