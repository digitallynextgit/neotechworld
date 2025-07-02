'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface DnaModelProps {
  modelPath: string;
}

function Model({ modelPath }: DnaModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  // Added vertical axis rotation (x-axis)
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.005; // Vertical axis rotation only
      // Removed horizontal rotation (y-axis)
    }
  });

  return <primitive object={scene} ref={modelRef} scale={3} position={[0, 0, 0]} />;
}

export default function DnaCanvas({ modelPath }: DnaModelProps) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} className='opacity-95'>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Model modelPath={modelPath} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}