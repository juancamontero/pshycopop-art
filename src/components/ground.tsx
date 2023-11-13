/* eslint-disable @typescript-eslint/no-unused-vars */
import { MeshReflectorMaterial } from '@react-three/drei'
import { type GroupProps } from '@react-three/fiber'

type Props = {
  width?: number
  height?: number
  color?: string
} & GroupProps

export const Ground = ({
  width = 50,
  height = 50,
  color = '#050505',
  ...props
}: Props) => {
  return (
    <mesh rotation={props.rotation} position={props.position}>
      <circleGeometry args={[10, 100]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color='#050505'
        metalness={0.5}
        mirror={0}
      />
    </mesh>
  )
}
