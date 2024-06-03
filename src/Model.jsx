import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model({ rotate, setRotate, ...props }) {

  const { camera, scene } = useThree()

  const model = useRef()

      useEffect(() => {
        if (rotate) {
            gsap.to(model.current.rotation, {
                y: model.current.rotation.y + Math.PI * 2,
                duration: 2,
                onComplete: () => setRotate(false),
            });
        }
    }, [rotate, setRotate]);

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST


      tl

      .to(".one-title, .one-border", {
        opacity: 0,
        yPercent:'-50',
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom", // Adjust start to start later
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
          start: "top bottom", // Adjust start to start later
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })
      

    })
    

  }, [])

  const { nodes, materials } = useGLTF("./newcan.glb");
  return (
    <group {...props} dispose={null} ref={ model } >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.can_Baked.geometry}
        material={materials['can_Baked.004']}
      />
    </group>
  );
}

useGLTF.preload("./newcan.glb");