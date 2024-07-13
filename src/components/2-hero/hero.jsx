/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */

import './hero.css';
import { motion } from 'framer-motion';
import { images } from '../../data';
export default function Hero() {
  
  return (
    <div className='hero' id='about'>
     
      <div className='slideleft'>
        <div className='avatar'>
          <img src={images.profile} alt='Avatar'></img>
          <span className='icon-verified'></span>
        </div>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.5 }}>Mohammed Alami,<span> Front-End Developer </span></motion.h1>
        <p>
        Hello, i'm Mohammed Alami, a frontend developer from Fes, Morocco. I specialize in designing and developing user interfaces for websites and web applications using technologies like HTML, CSS, JavaScript, and React. I'm passionate about creating smooth and engaging user experiences, and I focus on improving performance and user interaction.
        </p>
        <div className='social'>
          <span className='icon-instagram'></span>
          <span className='icon-linkedin-square'></span>
          <span className='icon-github'></span>
        </div>
      </div>
      <div className='slideright'>
        <img src={images.custom} alt='Slider Image'/>
      
      </div>
    </div>
  );
}
