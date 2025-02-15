import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-section flex relative'>
        <img className='bgimg' src="https://cdn.pixabay.com/photo/2024/04/06/17/32/ai-generated-8679700_1280.jpg" alt="" />
        <div className="textbg">
        <h1 className='blur-overlay absolute top-0 right-0 bottom-0 herotext w-1/2 text-white'>Find all your Legal Solutions at one Place</h1>
        </div>
    </div>
  )
}

export default Hero


{/* <DotLottieReact className='herogif w-1/2 pt-20'
src="https://lottie.host/8dc3dbaf-96f5-4586-819e-3e1ed4290cb6/NhsmMchDOG.lottie"
loop
autoplay
/> */}