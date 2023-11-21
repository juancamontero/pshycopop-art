import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  Stats,
} from '@react-three/drei'

import {
  PyscoLoader,
  TrainCabin,
  TrainChimney,
  TrainNose,
  TrainWheel,
} from '../components'


export const Train = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          className='canvas'
          camera={{
            fov: 35,
            near: 0.1,
            far: 100,
            position: [-5, 5, 7],
          }}
        >
          <color attach='background' args={['skyblue']} />
          <hemisphereLight
            color='blue'
            groundColor='darkslategrey'
            intensity={3}
          />
          <directionalLight
            color='white'
            intensity={2}
            position={[10, 10, 10]}
          />
          {/* train start */}
          <TrainCabin position={[1.5, 1.4, 0]} />
          <TrainNose rotation={[0, 0, Math.PI / 2]} position={[-1, 1, 0]} />
          <TrainChimney position={[-2, 1.9, 0]} />
          {/* bigWheelRear */}
          <TrainWheel
            rotation={[Math.PI / 2, 0, 0]}
            position={[1.5, 0.9, 0]}
            scale={[2, 1.25, 2]}
          />
          {/* smallWheels */}
          <TrainWheel rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]} />
          <TrainWheel rotation={[Math.PI / 2, 0, 0]} position={[-1, 0.5, 0]} />
          <TrainWheel rotation={[Math.PI / 2, 0, 0]} position={[-2, 0.5, 0]} />

          {/* train end */}

          <OrbitControls />
          <Grid args={[10, 10]} />
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
