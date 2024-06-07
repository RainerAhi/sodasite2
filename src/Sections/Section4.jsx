import { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { View, Bounds, useGLTF, PerspectiveCamera, OrthographicCamera, OrbitControls, ContactShadows, PivotControls, Environment, Float } from '@react-three/drei'
import Model2 from '../Model2'
import Model3 from '../Model3'
import { Loading } from '../Loading'
import { motion, AnimatePresence } from "framer-motion";

export const Section4 = () => {

    const view1 = useRef()
    const view2 = useRef()
    const ref = useRef()
    const ref2 = useRef()
    const perspectiveCamera= useRef()

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 767);
      };
  
      // Add event listener to listen for window resize
      window.addEventListener('resize', handleResize);
  
      // Initial check for mobile device on component mount
      handleResize();
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    console.log(isMobile)

    return (
    <section className='four' >
        <div className="four-content">
            <h1 className='four-title' >PRODUCTS</h1>
            <div className='available-in' >
              <h1 className='available-in-text' >AVAILABLE IN</h1>
              <div className="logos">
                <div className="logos-slide">
                    <img src="./logo1.png" />
                    <img src="./logo2.png" />
                    <img src="./logo3.png" />
                    <img src="./logo4.png" />
                    <img src="./logo1.png" />
                    <img src="./logo2.png" />
                    <img src="./logo3.png" />
                    <img src="./logo4.png" />
                </div>

                <div className="logos-slide">
                    <img src="./logo1.png" />
                    <img src="./logo2.png" />
                    <img src="./logo3.png" />
                    <img src="./logo4.png" />
                    <img src="./logo1.png" />
                    <img src="./logo2.png" />
                    <img src="./logo3.png" />
                    <img src="./logo4.png" />
                </div>
              </div>
          </div>
        </div>
        <div className='four-experience' >
            <div ref={ref} className='four-container' >
                <div className='four-container-content' >
                    <h1 className='four-container-text' >MANGO BLAST</h1>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="wave-button" 
                    >
                        <h1 className='button-text' >ORDER NOW</h1>
                        <div className='wave' />
                        </motion.button>
                </div>
                <div ref={view1} className='view' style={ { height: "100%", width: "50vw" } } />
                <div className='mobile-scroll' />
                <Canvas eventSource={ref} className='canvas' >
                    <View track={ view1 }>
                        <Suspense fallback={ <Loading /> } >
                            <Float speed={ 2 } >
                                <Model2 position={ [ 0, 0, 0 ] } />
                            </Float>  
                        </Suspense>
                        <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
                        <Environment preset='warehouse' />
                    </View>
                </Canvas>
            </div>
            <div ref={ref2} className='four-container' >
                <div className='four-container-content' >
                    <h1 className='four-container-text' >BLACK CHERRY</h1>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="wave-button" 
                    >
                        <h1 className='button-text' >ORDER NOW</h1>
                        <div className='wave' />
                        </motion.button>
                </div>
                <div ref={view2} className='view' style={ { height: "100%", width: "50vw" } } />
                <div className='mobile-scroll' />
                <Canvas eventSource={ref2} className='canvas' >
                    <View track={ view2 }>
                        <Suspense fallback={ <Loading /> } >
                            <Float speed={ 2 } >
                                <Model3 position={ [ 0, 0, 0 ] } />
                            </Float>  
                        </Suspense>
                        <OrbitControls minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
                        <Environment preset='warehouse' />
                    </View>
                </Canvas>
            </div>
        </div>
    </section>
    )
}