import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-section flex'>
        <DotLottieReact className='herogif'
      src="https://lottie.host/8dc3dbaf-96f5-4586-819e-3e1ed4290cb6/NhsmMchDOG.lottie"
      loop
      autoplay
    />
    <h1 className='text-8xl w-full text-purple-300'>Your all Legal Solutions at one Place</h1>
    </div>
  )
}

export default Hero