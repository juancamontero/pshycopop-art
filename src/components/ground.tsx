/* eslint-disable @typescript-eslint/no-unused-vars */
import { MeshReflectorMaterial, useTexture } from '@react-three/drei'

export const Ground = () => {
  const [roughness, normal, alpha] = useTexture([
    '/ground_roughness.jpeg',
    '/ground_normals.jpeg',
    '/ground_alpha.jpg',
  ])
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -2.9, 0]}>
      <circleGeometry args={[10, 100]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        mirror={0.5}
        resolution={512}
        mixBlur={6}
        mixStrength={1.5}
        alphaMap={alpha}
        roughnessMap={roughness || normal}
        metalness={0.55}
        roughness={0.12}
        envMapIntensity={0.1}
        color='#a0a0a0'
      />
    </mesh>
  )
}
