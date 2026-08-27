import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface SumoBotProps {
  targetX: number;
}

export const SumoBotModel: React.FC<SumoBotProps> = ({ targetX }) => {
  const { scene } = useGLTF('/sumo.glb');
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Measure raw bounding box of loaded model once
  const normalizeScale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    return maxDim > 0 ? 1 / maxDim : 1;
  }, [scene]);

  // Target size in world units based on viewport
  const displayScale = normalizeScale * Math.min(viewport.height * 0.32, viewport.width * 0.35);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        0.08
      );
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2.5) * 0.04 - 0.1;
      groupRef.current.rotation.y = -Math.PI * 0.35 + Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={displayScale} />
    </group>
  );
};

useGLTF.preload('/sumo.glb');

