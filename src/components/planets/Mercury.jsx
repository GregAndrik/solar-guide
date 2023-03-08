import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/mercury.png'

const Mercury = () => {
  return (
    <section id='mercury'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Mercury</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet; its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days. Due to its synodic proximity to Earth, Mercury is most often the closest planet to Earth, with Venus periodically taking this role.          
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mercury