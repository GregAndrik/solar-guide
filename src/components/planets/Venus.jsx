import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/venus.png'

const Venus = () => {
  return (
    <section id='venus'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Venus</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Venus is the second planet from the Sun. It is sometimes called Earth's "sister" or "twin" planet as it is almost as large and has a similar composition. As an interior planet to Earth, Venus (like Mercury) appears in Earth's sky never far from the Sun, either as morning star or evening star. Aside from the Sun and Moon, Venus is the brightest natural object in Earth's sky, capable of casting visible shadows on Earth in dark conditions and being visible to the naked eye in broad daylight.
            Venus is the second largest terrestrial object of the Solar System. It has a surface gravity slightly lower than on Earth and has a weak induced magnetosphere. The atmosphere of Venus consists mainly of carbon dioxide, and, at the planet’s surface, is the densest and hottest of the atmospheres of the four terrestrial planets. With an atmospheric pressure at the planet's surface of about 92 times the sea level pressure of Earth and a mean temperature of 737 K (464 °C; 867 °F), the carbon dioxide gas at Venus's surface is a supercritical fluid. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, making it the planet with the highest albedo in the Solar System. It may have had water oceans in the past, but after these evaporated the temperature rose under a runaway greenhouse effect. The possibility of life on Venus has long been a topic of speculation but research has not produced convincing evidence thus far.
          </p>
        </div>
      </div>
    </section> 
  )
}

export default Venus