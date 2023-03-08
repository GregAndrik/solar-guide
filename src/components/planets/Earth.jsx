import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/earth.png'
import moon from './../../assets/moons/earth/moon.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: moon,
    name:'The Moon',
    info:"The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet, with a diameter about one-quarter that of Earth (comparable to the width of Australia). The Moon is a planetary-mass object with a differentiated rocky body, making it a satellite planet under the geophysical definitions of the term and larger than all known dwarf planets of the Solar System. It lacks any significant atmosphere, hydrosphere, or magnetic field. Its surface gravity is about one-sixth of Earth's at 0.1654 g, with Jupiter's moon Io being the only satellite in the Solar System known to have a higher surface gravity and density."
  }
]

const Earth = () => {
  return (
    <section id='earth'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Earth</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. While Earth may not contain the largest volumes of water in the Solar System, only Earth sustains liquid surface water, extending over 70.8% of the Earth with its ocean, making Earth an ocean world. Earth's polar regions currently retain most of all other water with large sheets of ice covering ocean and land, dwarfing Earth's groundwater, lakes, rivers and atmospheric water. Land, consisting of continents and islands, extends over 29.2% of the Earth and is widely covered by vegetation. Below Earth's surface material lies Earth's crust consisting of several slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes the magnetosphere of Earth, deflecting destructive solar winds.
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

export default Earth