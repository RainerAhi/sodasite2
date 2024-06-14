import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Section5 = () => {
    useEffect(() => {
        // Ensure GSAP's ScrollTrigger is enabled
        gsap.registerPlugin(ScrollTrigger);
    
        // Define the animation timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".five-content",
            start: "top center",
            end: "top top",
            scrub: 1, // Smooth animation
          }
        });
    
        // Targets for animation
        const images = document.querySelectorAll(".five-content img");

        gsap.set(images[0], { x: "-30%", y: "-10%" });
        gsap.set(images[1], { x: "30%", y: "-10%" });
        gsap.set(images[2], { x: "-30%", y: "10%" });
        gsap.set(images[3], { x: "30%", y: "10%" });
    
        // Animation sequence
        tl.to(images[0], { x: "-110%", y: "-55%" })
          .to(images[1], { x: "110%", y: "-55%" }, 0)
          .to(images[2], { x: "-110%", y: "55%" }, 0)
          .to(images[3], { x: "110%", y: "55%" }, 0);
    
        // Clean up function
        return () => {
          tl.kill(); // Kill the timeline on unmount to free resources
        };
    
      }, []);
    
      return (
        <section className="five">
          <div className="five-content">
            <img src="/soda1.JPG" className="soda-small soda-z2" alt="soda1" />
            <img src="/soda2.JPG" className="soda-small" alt="soda2" />
            <img src="/soda5.jpg" className="soda-small" alt="soda3" />
            <img src="/soda4.jpg" className="soda-small soda-z2" alt="soda4" />
            <img src="/soda3.JPG" className="soda-big" alt="soda5" />
          </div>
        </section>
      );
    };