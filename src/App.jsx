import React from 'react'
import Header from './components/header/Header'
import Sol from './components/sol/Sol'
import Mercury from './components/planets/Mercury'
import Venus from './components/planets/Venus'
import Earth from './components/planets/Earth'
import Mars from './components/planets/Mars'
import Jupiter from './components/planets/Jupiter'
import Saturn from './components/planets/Saturn'
import Neptune from './components/planets/Neptune'
import Uranus from './components/planets/Uranus'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

const App = () => {
  return (  
    <>
      <Header/>
      <Sol/>
      <Mercury/>
      <Venus/>
      <Earth/>
      <Mars/>
      <Jupiter/>
      <Saturn/>
      <Neptune/>
      <Uranus/>
      <Footer/>
      <Nav/>
    </> 
  )
}

export default App