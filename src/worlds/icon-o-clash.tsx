import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { ScrollControls, Stats } from '@react-three/drei'

import { HomeScene } from '../scenes'

import { PyscoLoader } from '../components'

export const IconoClash = () => {
  return (
    <>
      <Canvas
        className='canvas'
        shadows
        camera={{ position: [0, 30, 60], fov: 35 }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            <HomeScene />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Stats />
      <PyscoLoader />
    </>
  )
}
