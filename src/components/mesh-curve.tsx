import { extend, useFrame } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { useRef } from 'react';
import type * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

interface MeshCurveProps {
  points: THREE.Vector3[];
  color?: string;
  dashArray?: number;
  dashRatio?: number;
  lineWidth?: number;
  speed?: number;
}

export const MeshCurve: React.FC<MeshCurveProps> = ({
  points,
  dashArray,
  color,
  dashRatio,
  lineWidth,
  speed,
}) => {
  const line = useRef<MeshLineGeometry>();
  const material = useRef<MeshLineMaterial>();

  useFrame(() => {
    if (material.current && speed) {
      material.current.uniforms.dashOffset.value -= 0.0001 * speed;
    }
  });

  return (
    <mesh>
       {/* @ts-expect-error  test*/}
      <meshLineGeometry ref={line} attach="geometry" points={points} />
      {/* @ts-expect-error  test*/}
      <meshLineMaterial
        attach="material"
        ref={material}
        transparent
        depthTest
        lineWidth={lineWidth}
        color={color}
        dashArray={dashArray}
        dashRatio={dashRatio}
      />
    </mesh>
  );
};

MeshCurve.defaultProps = {
  color: '#f00',
  dashArray: 0.05,
  dashRatio: 0.05,
  lineWidth: 0.8,
  speed: 0,
};