import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useState } from "react";

export default function Model2({props }) {
  const { camera, scene } = useThree();
  const model2 = useRef();
  const controlsRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl

      .to(controlsRef.current.target, {
        x: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".four",
          start: "top 70%",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model2.current.scale, {
        x: 0.65,
        y: 0.65,
        z: 0.65,
        scrollTrigger: {
          trigger: ".four",
          start: "top 70%",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(model2.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: ".four",
          start: "top 70%",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      

      


    });
  }, []);

  const desktopModelPath = "./mangocan.glb";
  const mobileModelPath = "./mangocan.glb";

  const { nodes, materials } = useGLTF(isMobile ? mobileModelPath : desktopModelPath);

  return (
    <>
        <OrbitControls target={ [ 5, 0, 0 ] } ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
        <group scale={ 0.4 } {...props} dispose={null} ref={model2}>
            <mesh castShadow receiveShadow geometry={nodes.can.geometry} material={materials.can} />
        </group>
    </>
  );
}

useGLTF.preload("./mangocan.glb")
useGLTF.preload("./mangocan.glb");