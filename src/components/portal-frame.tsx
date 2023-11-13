import * as THREE from 'three'

import {
  Text,
  MeshPortalMaterial,
  PortalMaterialType,
  useCursor,

} from '@react-three/drei'
import { GroupProps, extend, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useLocation, useRoute } from 'wouter'
import { easing, geometry } from 'maath'

extend(geometry)

type FrameProps = {
  idFrame: string
  name: string
  author: string
  bg: string
  width?: number
  height?: number
  children?: JSX.Element
} & GroupProps

export const PortalFrame = ({
  idFrame,
  name,
  author,
  bg,
  width = 1.4,
  height = 2.8,
  children,
  ...props
}: FrameProps) => {
  const portal = useRef<PortalMaterialType | null>(null)
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:idFrame')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((_state, dt) =>
    easing.damp(
      portal.current || <></>,
      'blend',
      params?.idFrame === idFrame ? 1 : 0,
      0.2,
      dt
    )
  )

  return (
    <>
      <group {...props}>
        <Text
          color="#67db3d"
          fontSize={0.3}
          anchorY='top'
          anchorX='left'
          lineHeight={0.8}
          position={[-0.575, 1.2, 0.01]}
          material-toneMapped={false}
        >
          {name}
        </Text>
        <Text
          fontSize={0.1}
          anchorX='right'
          position={[0.5, -0.859, 0.01]}
          material-toneMapped={false}
          color="#67db3d"
        >
          /{idFrame}
        </Text>
        <Text
          fontSize={0.04}
          anchorX='right'
          position={[-0.15, -0.877, 0.01]}
          material-toneMapped={false}
          color="#67db3d"
        >
          {author}
        </Text>
        <mesh
          name={idFrame}
          onDoubleClick={(e) => (
            e.stopPropagation(), setLocation('/item/' + e.object.name)
          )}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
        >
          {/* <roundedPlaneGeometry args={[width, height, 0.1]} /> */}
          <planeGeometry args={[width, height]} />
          {/* <boxGeometry args={[width, height, 0.1]} /> */}

          <MeshPortalMaterial
            ref={portal}
            events={params?.idFrame === idFrame} //Deshabilito eventos cuando estoy deontro
            side={THREE.DoubleSide}
            worldUnits={false}
         
            blend={0.5}
          >
            <color attach='background' args={[bg]} />
            {children}
          </MeshPortalMaterial>
        </mesh>
    
      </group>
    
    </>
  )
}
