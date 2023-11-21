import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stats,
} from '@react-three/drei'

import { PyscoLoader, Spiral } from '../components'

export const Tutorial = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          className='canvas'
          camera={{
            fov: 35,
            near: 0.1,
            far: 100,
            position: [0, 0, 7],
          }}
        >
          <color attach='background' args={['skyblue']} />
          <directionalLight
            color='white'
            intensity={5}
            position={[10, 10, 10]}
          />
          {/* <spotLight
            color='white'
            intensity={10}
            power={200}
            position={[-1, 4, 3]}
          /> */}
          {/* <ambientLight color='white' intensity={2} /> */}
          <hemisphereLight
            color='blue'
            groundColor='darkslategrey'
            intensity={5}
          />
          <Spiral />
          {/* <RotatingBox /> */}
          {/* <RigZoom /> */}
          <OrbitControls />
          <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
            <GizmoViewport
              axisColors={['red', 'green', 'blue']}
              labelColor='white'
            />
          </GizmoHelper>
          <Stats />
        </Canvas>
      </Suspense>
      <PyscoLoader />
    </>
  )
}
