import { useFrame } from '@react-three/fiber/native';
import {  useRef} from 'react';

export default function Box() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta;
    mesh.current.rotation.x += delta;
  });

  return (
    <mesh position={(0, 1, -0.1)} ref={mesh} scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial color={'lightgrey'} />
    </mesh>
  );
}
