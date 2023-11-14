import * as THREE from 'three'
import { Suspense, useEffect } from 'react'
import { Canvas, RootState, extend, useThree } from '@react-three/fiber'
import {
  CameraControls,
  Environment,
  // MeshReflectorMaterial,
  // GizmoHelper,
  // GizmoViewport,
  // MeshReflectorMaterial,
  OrbitControls,
} from '@react-three/drei'
import { useRoute } from 'wouter'
import { geometry } from 'maath'

import { Ground, HomeBanner, PyscoLoader } from './components'

import { PsycoScene } from './scenes'
// import { Psyco1Scene } from './scenes' //HomeScene,

extend(geometry)

function Portals() {
  return (
    <>
      <HomeBanner />
      <Canvas
        className='canvas'
        camera={{ fov: 75, position: [0, 0, 20] }}
        eventSource={document.getElementById('root')!}
        eventPrefix='client'
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
      >
        <color attach='background' args={['#310237']} />
        <fog attach='fog' args={['#191920', 0, 15]} />

        {/* FRAMES START */}
        <Suspense>
          <PsycoScene />
          <Ground rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} />
          {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[50, 50]} />
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
          </mesh> */}

          <OrbitControls
            enablePan={false}
           
            minPolarAngle={Math.PI / 2.1}
            maxPolarAngle={Math.PI / 2.1}
         
          />

          <Rig />

          {/* <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
            <GizmoViewport
              axisColors={['red', 'green', 'blue']}
              labelColor='white'
            />
          </GizmoHelper> */}
          <Environment preset='warehouse' />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            // maxZoom={10}
            // minZoom={10}
            // minPolarAngle={Math.PI / 2.1}
            // maxPolarAngle={Math.PI / 2.1}
            // minAzimuthAngle={Math.PI }
            // maxAzimuthAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>
      <PyscoLoader />
    </>
  )
}

export default Portals

type RigType = RootState & {
  controls: CameraControls
}
function Rig({
  position = new THREE.Vector3(0, -0.25, 4),
  focus = new THREE.Vector3(0, 0, 0),
}) {
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
