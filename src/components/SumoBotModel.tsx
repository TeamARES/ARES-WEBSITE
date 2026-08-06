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

  // Measure the raw bounding box of the loaded model once
  const normalizeScale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    // Normalize so the largest dimension = 1 world unit
    return maxDim > 0 ? 1 / maxDim : 1;
  }, [scene]);

  // Target height: ~8% of viewport height in world units
  const displayScale = normalizeScale * viewport.height * 0.5;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        0.08
      );
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.03;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -Math.PI * 0.35, 0]} dispose={null}>
      <primitive object={scene} scale={displayScale} />
    </group>
  );
};

useGLTF.preload('/sumo.glb');

