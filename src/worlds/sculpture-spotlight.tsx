import { Suspense, useRef } from 'react'
import { Vector3, type SpotLight as SpotLightType } from 'three'

import { Canvas, useFrame, useThree } from '@react-three/fiber'

import {
  OrbitControls,
  Grid,
  GizmoHelper,
  GizmoViewport,
  Stats,
  SpotLight,
  useDepthBuffer,

} from '@react-three/drei'

import { PyscoLoader } from '../components'

import { Guitar } from '../models'

export const SculptureSpotlight = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          className='canvas'
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 1, 3], fov: 45, near: 0.01, far: 20 }}
        >
          <color attach='background' args={['#202020']} />
          <fog attach='fog' args={['#202020', 5, 20]} />
          <ambientLight intensity={0.015} />
          <Scene />

          {/* <RotatingBox/> */}
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

const Scene = () => {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })

  return (
    <>
      <MovingSpot
        depthBuffer={depthBuffer}
        color='white'
        position={[2, 2, 2]}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color='yellow'
        position={[-2, 2, 0]}
      />
      {/* <mesh position={[0, -1.03, 0]} castShadow receiveShadow geometry={nodes.dragon.geometry} material={materials['Default OBJ.001']} dispose={null} /> */}
      <Guitar position={[0, 0.45, 0.8]} scale={1.8} castShadow receiveShadow dispose={null} />
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}

const MovingSpot = ({ vec = new Vector3(), ...props }) => {
  const light = useRef<SpotLightType>(null!)
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    )
    light.current.target.updateMatrixWorld()
  })
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={0}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  )
}
