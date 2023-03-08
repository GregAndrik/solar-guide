import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/mars.png'
import moon1 from './../../assets/moons/mars/phobos.jpg'
import moon2 from './../../assets/moons/mars/deimos.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: moon1,
    name:'Phobos',
    info:"Phobos or Mars I is the innermost and larger of the two natural satellites of Mars, the other being Deimos. The two moons were discovered in 1877 by American astronomer Asaph Hall. It is named after Phobos, the Greek god of fear and panic, who is the son of Ares (Mars) and twin brother of Deimos"
  },
  {
    avatar: moon2,
    name:'Deimos',
    info:"Deimos or Mars II is the smaller and outermost of the two natural satellites of Mars, the other being Phobos. Of similar composition to C and D-type asteroids, Deimos has a mean radius of 6.2 km (3.9 mi) and takes 30.3 hours to orbit Mars. Deimos is 23,460 km (14,580 mi) from Mars, much farther than Mars's other moon, Phobos. It is named after Deimos, the Ancient Greek god and personification of dread and terror."
  }
]

const Mars = () => {
  return (
    <section id='mars'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Mars</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, larger only than Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. Mars has two small, irregularly shaped moons, Phobos and Deimos.
            Some of the most notable surface features on Mars include Olympus Mons, the largest volcano and highest-known mountain in the Solar System, and Valles Marineris, one of the largest canyons in the Solar System. The Borealis basin in the Northern Hemisphere covers approximately 40% of the planet and may be a large impact feature. Days and seasons on Mars are comparable to those of Earth, as the planets have a similar rotation period and tilt of the rotational axis relative to the ecliptic plane. Liquid water on the surface of Mars cannot exist due to low atmospheric pressure, which is less than 1% of the atmospheric pressure on Earth. Both of Mars's polar ice caps appear to be made largely of water. In the distant past, Mars was likely wetter, and thus possibly more suited for life. It is not known whether life has ever existed on Mars.
          </p>
        </div>
      </div>

      <Swiper className='container satellites__container'
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, info}, index) => {
            return (
              <SwiperSlide key={index} className='satellite'>
                <div className='satellite__avatar'>
                  <img src={avatar}/>
                </div>
                <h5>{name}</h5>
                <small className='satellite__info'>{info}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section> 
  )
}

export default Mars