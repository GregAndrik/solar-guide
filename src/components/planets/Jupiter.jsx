import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/jupiter.png'
import moon1 from './../../assets/moons/jupiter/io.jpg'
import moon2 from './../../assets/moons/jupiter/europa.jpg'
import moon3 from './../../assets/moons/jupiter/ganymede.jpg'
import moon4 from './../../assets/moons/jupiter/callisto.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: moon1,
    name:'Io',
    info:"Io, or Jupiter I, is the innermost and third-largest of the four Galilean moons of the planet Jupiter. Slightly larger than Earth’s moon, Io is the fourth-largest moon in the Solar System, has the highest density of any moon, the strongest surface gravity of any moon, and the lowest amount of water (by atomic ratio) of any known astronomical object in the Solar System. It was discovered in 1610 by Galileo Galilei and was named after the mythological character Io, a priestess of Hera who became one of Zeus's lovers."
  },
  {
    avatar: moon2,
    name:'Europa',
    info:"Europa, or Jupiter II, is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 92 known moons of Jupiter. It is also the sixth-largest moon in the Solar System. Europa was discovered in 1610 by Galileo and was named after Europa, the Phoenician mother of King Minos of Crete and lover of Zeus (the Greek equivalent of the Roman god Jupiter). Slightly smaller than Earth's Moon, Europa is primarily made of silicate rock and has a water-ice crust and probably an iron–nickel core. It has a very thin atmosphere, composed primarily of oxygen. Its white-beige surface is striated by light tan cracks and streaks, but craters are relatively few. In addition to Earth-bound telescope observations, Europa has been examined by a succession of space-probe flybys, the first occurring in the early 1970s. In September 2022, the Juno spacecraft flew within about 200 miles of Europa for a more recent close-up view."
  },
  {
    avatar: moon3,
    name:'Ganymede',
    info:"Ganymede, a satellite of Jupiter (Jupiter III), is the largest and most massive of the Solar System's moons. The ninth-largest object (including the Sun) of the Solar System, it is the largest without a substantial atmosphere (albeit not the most massive one, which is Mercury). It has a diameter of 5,268 km (3,273 mi), making it 26 percent larger than the planet Mercury by volume, although it is only 45 percent as massive. Possessing a metallic core, it has the lowest moment of inertia factor of any solid body in the Solar System and is the only moon known to have a magnetic field. Outward from Jupiter, it is the seventh satellite and the third of the Galilean moons, the first group of objects discovered orbiting another planet. Ganymede orbits Jupiter in roughly seven days and is in a 1:2:4 orbital resonance with the moons Europa and Io, respectively."
  },
  {
    avatar: moon4,
    name:'Callisto',
    info:"Callisto, or Jupiter IV, is the second-largest moon of Jupiter, after Ganymede. It is the third-largest moon in the Solar System after Ganymede and Saturn's largest moon Titan, and the largest object in the Solar System that may not be properly differentiated. Callisto was discovered in 1610 by Galileo Galilei. With a diameter of 4821 km, Callisto is about 99% the diameter of the planet Mercury, but only about a third of its mass. It is the fourth Galilean moon of Jupiter by distance, with an orbital radius of about 1883000 km. It is not in an orbital resonance like the three other Galilean satellites—Io, Europa, and Ganymede—and is thus not appreciably tidally heated. Callisto's rotation is tidally locked to its orbit around Jupiter, so that the same hemisphere always faces inward. Because of this, there is a sub-Jovian point on Callisto's surface, from which Jupiter would appear to hang directly overhead. It is less affected by Jupiter's magnetosphere than the other inner satellites because of its more remote orbit, located just outside Jupiter's main radiation belt."
  }
]

const jupiter = () => {
  return (
    <section id='jupiter'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Jupiter</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.
            Jupiter is primarily composed of hydrogen, followed by helium, which constitutes a quarter of its mass and a tenth of its volume. The ongoing contraction of Jupiter's interior generates more heat than the planet receives from the Sun. Because of its rapid rotation rate of 1 rotation per 10 hours, the planet's shape is an oblate spheroid: it has a slight but noticeable bulge around the equator. The outer atmosphere is divided into a series of latitudinal bands, with turbulence and storms along their interacting boundaries. A prominent result of this is the Great Red Spot, a giant storm which has been observed since at least 1831.
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

export default jupiter