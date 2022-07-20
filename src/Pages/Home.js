import React from 'react'
import Footer from '../components/Footer'
import './Home.css'
import Section_1 from './HomePage_Components/Section_1'
import Section_2 from './HomePage_Components/Section_2'
import Section_3 from './HomePage_Components/Section_3'
import Svg_animation from './HomePage_Components/Svg_animation'
const Home = () => {
  return (
    <div  className='main-home-container' >

      <Svg_animation />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Footer />
    </div>
  )
}

export default Home