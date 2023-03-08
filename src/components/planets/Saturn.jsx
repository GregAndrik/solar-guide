import React from 'react'
import '../planets.css'
import '../../index.css'
import planet from './../../assets/planets/saturn.png'
import moon1 from './../../assets/moons/saturn/mimas.jpg'
import moon2 from './../../assets/moons/saturn/enceladus.jpg'
import moon3 from './../../assets/moons/saturn/tethys.jpg'
import moon4 from './../../assets/moons/saturn/dione.jpg'
import moon5 from './../../assets/moons/saturn/rhea.jpg'
import moon6 from './../../assets/moons/saturn/titan.jpg'
import moon7 from './../../assets/moons/saturn/iapetus.jpg'

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: moon1,
    name:'Mimas',
    info:"Mimas, also designated Saturn I, is a moon of Saturn discovered in 1789 by William Herschel. It is named after Mimas, a son of Gaia in Greek mythology. With a diameter of 396 kilometres (246 mi), it is the smallest astronomical body that is known to still be rounded in shape because of self-gravitation. However, Mimas is not actually in hydrostatic equilibrium for its current rotation."
  },
  {
    avatar: moon2,
    name:'Enceladus',
    info:"Enceladus is the sixth-largest moon of Saturn (19th largest in the Solar System). It is about 500 kilometers (310 miles) in diameter, about a tenth of that of Saturn's largest moon, Titan. Enceladus is mostly covered by fresh, clean ice, making it one of the most reflective bodies of the Solar System. Consequently, its surface temperature at noon only reaches −198 °C (75.1 K; −324.4 °F), far colder than a light-absorbing body would be. Despite its small size, Enceladus has a wide range of surface features, ranging from old, heavily cratered regions to young, tectonically deformed terrain."
  },
  {
    avatar: moon3,
    name:'Tethys',
    info:"Tethys, or Saturn III, is a mid-sized moon of Saturn about 1,060 km (660 mi) across. It was discovered by G. D. Cassini in 1684 and is named after the titan Tethys of Greek mythology. Tethys has a low density of 0.98 g/cm3, the lowest of all the major moons in the Solar System, indicating that it is made of water ice with just a small fraction of rock. This is confirmed by the spectroscopy of its surface, which identified water ice as the dominant surface material. A small amount of an unidentified dark material is present as well. The surface of Tethys is very bright, being the second-brightest of the moons of Saturn after Enceladus, and neutral in color."
  },
  {
    avatar: moon4,
    name:'Dione',
    info:"Dione is a moon of Saturn. It was discovered by Italian astronomer Giovanni Domenico Cassini in 1684. It is named after the Titaness Dione of Greek mythology. It is also designated Saturn IV."
  },
  {
    avatar: moon5,
    name:'Rhea',
    info:"Rhea is the second-largest moon of Saturn and the ninth-largest moon in the Solar System. It is the smallest body in the Solar System for which precise measurements have confirmed a shape consistent with hydrostatic equilibrium. It was discovered in 1672 by Giovanni Domenico Cassini."
  },
  {
    avatar: moon6,
    name:'Titan',
    info:"Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere, and is the only known object in space other than Earth on which clear evidence of stable bodies of surface liquid has been found. Titan is one of the seven gravitationally rounded moons in orbit around Saturn, and the second most distant from Saturn of those seven. Frequently described as a planet-like moon, Titan is 50% larger (in diameter) than Earth's Moon and 80% more massive. It is the second-largest moon in the Solar System after Jupiter's moon Ganymede, and is larger than the planet Mercury, but only 40% as massive."
  },
  {
    avatar: moon7,
    name:'Iapetus',
    info:"Iapetus is a moon of Saturn. It is the 24th of Saturn’s 83 known moons. With an estimated diameter of 1,469 km, it is the third-largest moon of Saturn and the eleventh-largest in the Solar System. Named after the Titan Iapetus, the moon was discovered in 1671 by Giovanni Domenico Cassini. A relatively low-density body made up mostly of ice, Iapetus is home to several distinctive and unusual features, such as a striking difference in coloration between its leading hemisphere, which is dark, and its trailing hemisphere, which is bright, as well as a massive equatorial ridge running three-quarters of the way around the moon."
  }
]

const Saturn = () => {
  return (
    <section id='saturn'>
      <div className='container planet__container'>
        <article className='planet__item'>
          <div className='planet__item-image'>
            <img src={planet} alt='image'/>
            <h3>Saturn</h3>
          </div>
        </article>
        <div className='planet__content'>
          <p>
            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive.
            Saturn's interior is most likely composed of a rocky core, surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 kilometres per hour (1,100 miles per hour), higher than on Jupiter but not as high as on Neptune.
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

export default Saturn