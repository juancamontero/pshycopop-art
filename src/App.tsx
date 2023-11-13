import { Canvas } from '@react-three/fiber'
import { HomeScene, PsycoScene } from './scenes'
import { ScrollControls } from '@react-three/drei'
import { Suspense, useState } from 'react'

import { PyscoLoader } from './components'

type CurrentScene = 1 | 2

function App() {
  const [currentScene, setCurrentScene] = useState<CurrentScene>(1)

  return (
    <>
      <main className='app'>
        <section className='hero'>
          <h1>Pshyco Pop Art</h1>
          <div className='btns-div'>
            <button onClick={() => setCurrentScene(1)}>Escene 1</button>
            <button onClick={() => setCurrentScene(2)}>Escene 2</button>
          </div>
          <h3>Escene {currentScene}</h3>
        </section>
      </main>
      <Canvas
        className='canvas'
        shadows
        camera={{ position: [0, 30, 60], fov: 15 }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={3}>
            {currentScene === 1 ? <HomeScene /> : <PsycoScene />}
          </ScrollControls>
        </Suspense>
      </Canvas>
      <PyscoLoader />
    </>
  )
}

export default App
