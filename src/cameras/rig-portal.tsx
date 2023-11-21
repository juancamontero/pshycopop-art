import { useEffect } from 'react'

import * as THREE from 'three'

import { RootState, useThree } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

import { useRoute } from 'wouter'

type RigType = RootState & {
  controls: CameraControls
}


export const PortalRig = ({
  position = new THREE.Vector3(0, -0.25, 4),
  focus = new THREE.Vector3(0, 0, 0),
}) => {
  const { controls, scene } = useThree<RigType>()
  const [, params] = useRoute('/item/:idFrame')

  useEffect(() => {
    if (params) {
      const active = scene.getObjectByName(params?.idFrame)
      if (active && active.parent) {
        active.parent.localToWorld(position.set(0, 0.5, 0.25))
        active.parent.localToWorld(focus.set(0, 0, -2))
      }
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return (
    <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  )
}
