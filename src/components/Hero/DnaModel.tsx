"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface DnaModelProps {
  modelPath: string;
}

function Model({ modelPath }: DnaModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  // Center the model based on its bounding box
  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center); // Shift model to origin
    }
  }, []);

  // Rotate the model around the X-axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.005;
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={3}
      position={[0, 0, 0]} 
    />
  );
}

export default function DnaCanvas({ modelPath }: DnaModelProps) {
  return (
    <Canvas
      camera={{ position: [20, -60, 30], fov: 10 }}
      className="opacity-20"
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={0.5}
        intensity={2}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Model modelPath={modelPath} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
