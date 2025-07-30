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

  // Apply materials to enhance peach color visibility
  useEffect(() => {
    if (modelRef.current) {
      // Center the model based on its bounding box
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center); // Shift model to origin
      
      // Enhance material properties for better visibility
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          // Enhance existing materials to make peach color more visible
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              if (mat.color.getHexString().includes('ff') || mat.color.getHexString().includes('fa')) {
                mat.emissive = new THREE.Color('#ffcbb8');
                mat.emissiveIntensity = 1.0;
                mat.transparent = true;
                mat.opacity = 0.9;
              }
            });
          } else {
            if (child.material.color.getHexString().includes('ff') || child.material.color.getHexString().includes('fa')) {
              child.material.emissive = new THREE.Color('#ffcbb8');
              child.material.emissiveIntensity = 1.0;
              child.material.transparent = true;
              child.material.opacity = 0.9;
            }
          }
        }
      });
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
      scale={10} // Significantly increased scale for background visibility
      position={[0, 0, 0]}
    />
  );
}

export default function DnaCanvas({ modelPath }: DnaModelProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 30 }}
      className="w-full h-full"
    >
      <ambientLight intensity={3.5} />
      <directionalLight position={[3, 3, 3]} intensity={2.5} color="#ffcbb8" />
      <directionalLight position={[-5, -5, -5]} intensity={2.5} color="#ffcbb8" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.25}
        penumbra={0.7}
        intensity={4}
        color="#ffcbb8"
      />
      <pointLight position={[-10, -10, -10]} intensity={2.5} color="#ffcbb8" />
      <pointLight position={[0, 0, 20]} intensity={2} color="#ffcbb8" />
      <Model modelPath={modelPath} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
