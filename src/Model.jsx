import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useState } from "react";

export default function Model({ rotate, setRotate, ...props }) {
  const { camera, scene } = useThree();
  const model = useRef();
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

  useEffect(() => {
    if (rotate) {
      gsap.to(model.current.rotation, {
        y: model.current.rotation.y + Math.PI * 2,
        duration: 2,
        onComplete: () => setRotate(false),
      });
    }
  }, [rotate, setRotate]);

  const tl = gsap.timeline();
  let mm = gsap.matchMedia();

  useLayoutEffect(() => {
    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      tl
        .to(".one-title, .one-border", {
          opacity: 0,
          yPercent: '-50',
          scrollTrigger: {
            trigger: ".two",
            start: "top bottom",
            end: "bottom 100%",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(model.current.rotation, {
          x: Math.PI * 2,
          y: Math.PI * 2,
          scrollTrigger: {
            trigger: ".two",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
        .to(".experience", {
          position: "absolute",
          scrollTrigger: {
            trigger: ".three",
            start: "top bottom",
            end: "bottom 100%",
            scrub: true,
            immediateRender: false,
          },
        });
    });
  }, []);

  const desktopModelPath = "./desktop.glb";
  const mobileModelPath = "./mobile.glb";

  const { nodes, materials } = useGLTF(isMobile ? mobileModelPath : desktopModelPath);

  return (
    <group {...props} dispose={null} ref={model}>
      <mesh castShadow receiveShadow geometry={nodes.can.geometry} material={materials.can} />
    </group>
  );
}

useGLTF.preload('./desktop.glb')
useGLTF.preload("./mobile.glb");
