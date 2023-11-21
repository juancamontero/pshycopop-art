import { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { MathUtils, Group, Object3DEventMap } from 'three'

export const Spiral = () => {
  const radiansPerSecond = MathUtils.degToRad(30)

  const newPositions = []
  for (let i = 0; i < 1; i += 0.05) {
    newPositions.push([
      Math.cos(2 * Math.PI * i),
      Math.sin(2 * Math.PI * i),
      Math.tan(-i*1.5),
    ])
  }
  const myGroup = useRef<Group<Object3DEventMap>>(null)

  useFrame((_state, dt) => {
    myGroup.current!.rotation.z += radiansPerSecond * dt
  })

  return (
    <group ref={myGroup}>
      <MySphere />
      {newPositions.map((pos, index) => {
        return (
          <MySphere key={index} position={pos} scale={0.01 + index * 0.05} />
        )
      })}
    </group>
  )
}

const MySphere = ({ ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial color='indigo' />
    </mesh>
  )
}
