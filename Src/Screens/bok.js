// @ts-nocheck
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { useState, useRef, Suspense, useLayoutEffect } from 'react';


export default function Box() {
    const [active, setActive] = useState(false);
  
    const mesh = useRef();
  
    useFrame((state, delta) => {
  
        mesh.current.rotation.y += delta;
        mesh.current.rotation.x += delta;
      
    });
  
    return (
      <mesh
      position={0,1,-0.1}
        ref={mesh}
        scale={ 1.5 }
      >
        <boxGeometry />
    
        <meshStandardMaterial color={'lightgrey'} />
      </mesh>
    );
  }