import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Tilte from './components/Title/Tilte'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonals from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const[playState,setPlay]=useState(false);

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
      <Tilte  sub= "Our Program" title="What we offer"/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Tilte  sub= "Gallery" title="Campus Photos"/>
      <Campus/>
      <Tilte sub="TESTIMONIALS" title="What Student Says"/>
      <Testimonals/>
      <Tilte sub="contact us" title="Get in Touch"/>
      <Contact />
      <Footer/>
      </div>
        <VideoPlayer playState={playState} setPlay={setPlay} />
      
      


      
    </div>
  )
}

export default App
