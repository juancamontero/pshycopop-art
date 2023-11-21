import { useRef } from 'react'
import { MathUtils, Mesh } from 'three'
import { MeshProps, useFrame } from '@react-three/fiber'

export const TrainWheel = ({ ...props }: MeshProps) => {
    const wheelSpeed = MathUtils.degToRad(24)
    const wheel = useRef<Mesh>(null!)
    useFrame((_state, delta) => {
      wheel.current.rotation.y += wheelSpeed * delta
    })
  return (
    <mesh {...props} ref={wheel}>
      <cylinderGeometry args={[0.4, 0.4, 1.75, 16]}/>
      <meshStandardMaterial color='darkslategray' flatShading={true} />
    </mesh>
  )
}
