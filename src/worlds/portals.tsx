import { Suspense } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import {
  Environment,
  // MeshReflectorMaterial,
  // GizmoHelper,
  // GizmoViewport,
  // MeshReflectorMaterial,
  OrbitControls,
  Stats,
} from '@react-three/drei'

import { geometry } from 'maath'

import { Ground, PyscoLoader } from '../components'

import { PsycoScene } from '../scenes'
import { PortalRig } from '../cameras'
// import { Psyco1Scene } from './scenes' //HomeScene,

extend(geometry)

export const Portals = () => {
  return (
    <>
      <Canvas
        className='canvas'
        camera={{ fov: 75, position: [0, 0, 20] }}
        eventSource={document.getElementById('root')!}
        eventPrefix='client'
        // gl={{ antialias: false }}
        dpr={[1, 1.5]}
      >
        <color attach='background' args={['#310237']} />
        <fog attach='fog' args={['blue', 0, 15]} />

        {/* FRAMES START */}
        <Suspense>
          <PsycoScene />
          <Ground rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} />
          <OrbitControls
            enablePan={false}
            minPolarAngle={Math.PI / 2.1}
            maxPolarAngle={Math.PI / 2.1}
          />

          <PortalRig />

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
        <Stats />
      </Canvas>
      <PyscoLoader />
    </>
  )
}
