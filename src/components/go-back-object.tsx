import { Text, useCursor } from '@react-three/drei'

import { type GroupProps } from '@react-three/fiber'
import { useState } from 'react'
import { useLocation } from 'wouter'

export const GoBack = ({ ...props }: GroupProps) => {
  const [, setLocation] = useLocation()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  return (
    <>
      <group
        {...props}
        onClick={() => setLocation('/')}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <Text
          color='blue'
          fontSize={0.19}
          anchorY='top'
          anchorX='left'
          lineHeight={0.8}
          material-toneMapped={false}
        >
          BACK
        </Text>
      </group>
    </>
  )
}
