import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Section7 = () => {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };
    
      return (
        <section className="seven">
          <div className="seven-content">
            <h1 className="seven-text" >GET YOURS NOW</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className='wave-button'
                onClick={() => handleClick('https://www.dialedweb.com/lander')}
              >
                <h1 className='button-text'>ORDER NOW</h1>
                <div className='wave' />
              </motion.button>
          </div>
        </section>
      );
    };