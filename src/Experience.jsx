import { Suspense, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows, Effects } from '@react-three/drei'
import { easing } from 'maath'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import { Loading } from './Loading'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience({ rotate, setRotate }) {
  

  return (
    <>
      <Suspense fallback={ <Loading /> } >
        <Float speed={ 2 } >
          <Model rotate={rotate} setRotate={setRotate}/>
        </Float>  
      </Suspense>
      <Environment preset='warehouse' />
      </>
  )
}