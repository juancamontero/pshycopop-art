import { Canvas } from '@react-three/fiber'
import { HomeScene } from './scenes'
import { ScrollControls } from '@react-three/drei'

function App() {
  return (
    <>
      <main className='app'>
        <section className='hero'>
          <h1>Web 3D Workshop</h1>
          <h3>Juank Resting shit</h3>
        </section>
      </main>
      <Canvas
        className='canvas'
        shadows
        camera={{ position: [0, 30, 60], fov: 15 }}
      >
        <ScrollControls pages={3}>
          <HomeScene />
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
