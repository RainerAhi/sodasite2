import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Section6 = () => {
    return (
        <section className="six">
            <div className="six-content">
                <video 
                    src="/sodavideo.mp4" 
                    autoPlay 
                    loop 
                    muted
                    className="background-video"
                ></video>
            </div>
        </section>
    );
};