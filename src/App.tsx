import * as THREE from 'three'
import { Canvas,  } from '@react-three/fiber'
import { HomeScene, Psyco1Scene } from './scenes'
import { Loader, ScrollControls } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js'


type CurrentScene = 1 | 2

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())



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
            {currentScene === 1 ? <HomeScene /> : <Psyco1Scene />}
          </ScrollControls>
        </Suspense>
      </Canvas>
   
      <Loader
        dataInterpolation={(p) => `Psyco Poping ${p.toFixed(2)}%`}
        dataStyles={{ color: 'purple', fontSize: '1.9rem', fontWeight: 'bold' }}
        barStyles={{ backgroundColor: 'pink', height: '80px', width: '90%' }}
        containerStyles={{
          backgroundColor: 'lime',
          // height: '100vh',
          // width: '100vw',
          // position: 'fixed',
          // top: 0,
          // left: 0,
        }}
      />
    </>
  )
}

export default App
