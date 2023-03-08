import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/uranus.png'
import moon1 from './../../assets/moons/uranus/miranda.jpg'
import moon2 from './../../assets/moons/uranus/ariel.jpg'
import moon3 from './../../assets/moons/uranus/umbriel.jpg'
import moon4 from './../../assets/moons/uranus/titania.jpg'
import moon5 from './../../assets/moons/uranus/oberon.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: moon1,
    name:'Miranda',
    info:"Miranda, also designated Uranus V, is the smallest and innermost of Uranus's five round satellites. It was discovered by Gerard Kuiper on 16 February 1948 at McDonald Observatory in Texas, and named after Miranda from William Shakespeare's play The Tempest. Like the other large moons of Uranus, Miranda orbits close to its planet's equatorial plane. Because Uranus orbits the Sun on its side, Miranda's orbit is perpendicular to the ecliptic and shares Uranus' extreme seasonal cycle."
  },
  {
    avatar: moon2,
    name:'Ariel',
    info:"Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell and named for a character in two different pieces of literature. As of 2019, much of the detailed knowledge of Ariel derives from a single flyby of Uranus performed by the space probe Voyager 2 in 1986, which managed to image around 35% of the moon's surface. There are no active plans at present to return to study the moon in more detail, although various concepts such as a Uranus Orbiter and Probe have been proposed."
  },
  {
    avatar: moon3,
    name:'Umbriel',
    info:"Umbriel is a moon of Uranus discovered on October 24, 1851, by William Lassell. It was discovered at the same time as Ariel and named after a character in Alexander Pope's 1712 poem The Rape of the Lock. Umbriel consists mainly of ice with a substantial fraction of rock, and may be differentiated into a rocky core and an icy mantle. The surface is the darkest among Uranian moons, and appears to have been shaped primarily by impacts. However, the presence of canyons suggests early endogenic processes, and the moon may have undergone an early endogenically driven resurfacing event that obliterated its older surface."
  },
  {
    avatar: moon4,
    name:'Titania',
    info:"Titania, also designated Uranus III, is the largest of the moons of Uranus and the eighth largest moon in the Solar System at a diameter of 1,578 kilometres (981 mi). Discovered by William Herschel in 1787, it is named after the queen of the fairies in Shakespeare's A Midsummer Night's Dream. Its orbit lies inside Uranus's magnetosphere."
  },
  {
    avatar: moon5,
    name:'Oberon',
    info:"Oberon, also designated Uranus IV, is the outermost major moon of the planet Uranus. It is the second-largest and second most massive of the Uranian moons, and the ninth most massive moon in the Solar System. Discovered by William Herschel in 1787, Oberon is named after the mythical king of the fairies who appears as a character in Shakespeare's A Midsummer Night's Dream. Its orbit lies partially outside Uranus's magnetosphere."
  }
]

const Uranus = () => {
  return (
    <section id='uranus'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Uranus</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Uranus is the seventh planet from the Sun. It is named after Greek sky deity Uranus (Caelus), who in Greek mythology is the father of Cronus (Saturn), a grandfather of Zeus (Jupiter) and great-grandfather of Ares (Mars). Uranus has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. The planet is similar in composition to Neptune, and both have bulk chemical compositions which differ from those of the other two giant planets, Jupiter and Saturn (the gas giants). For this reason, scientists often distinguish Uranus and Neptune as "ice giants".
            As with gas giants, ice giants lack a well-defined solid surface. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 kelvins (−224 °C; −371 °F). It has a complex, layered cloud structure; water is thought to make up the lowest clouds and methane the uppermost layer. The planet's interior is mainly composed of ices and rock.
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

export default Uranus