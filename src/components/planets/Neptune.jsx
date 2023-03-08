import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/neptune.png'
import moon from './../../assets/moons/neptune/triton.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: moon,
    name:'Triton',
    info:"Triton is the largest natural satellite of the planet Neptune, and was the first Neptunian moon to be discovered, on October 10, 1846, by English astronomer William Lassell. It is the only large moon in the Solar System with a retrograde orbit, an orbit in the direction opposite to its planet's rotation. Because of its retrograde orbit and composition similar to Pluto, Triton is thought to have been a dwarf planet, captured from the Kuiper belt."
  }
]

const Neptune = () => {
  return (
    <section id='neptune'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Neptune</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.
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

export default Neptune