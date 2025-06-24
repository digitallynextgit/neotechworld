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

  // Removed vertical movement animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Keep rotation
    }
  });

  return <primitive object={scene} ref={modelRef} scale={1} position={[0, 0, 0]} />;
}

export default function DnaCanvas({ modelPath }: DnaModelProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
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