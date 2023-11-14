import { useState } from 'react'
import { useLocation } from 'wouter'

import { IconoClash, Portals } from './worlds'

type CurrentScene = 1 | 2

function App() {
  const [, setLocation] = useLocation()
  const [currentScene, setCurrentScene] = useState<CurrentScene>(1)

  const renderScene = (scene: number) => {
    switch (scene) {
      case 1:
        return <IconoClash />
      case 2:
        return <Portals />
      default:
        return <></>
    }
  }

  return (
    <>
      <main className='app'>
        <section className='hero'>
          <h1>Pshyco Pop Art</h1>
          <div className='btns-div'>
            <button
              onClick={() => {
                setLocation('/')
                setCurrentScene(1)
              }}
            >
              Icon 0 Clash
            </button>
            <button onClick={() => setCurrentScene(2)}>Portals </button>
            {currentScene === 2 && (
              <button onClick={() => setLocation('/')}>Back</button>
            )}
          </div>
          {currentScene === 2 && <h3>Double click to enter portal</h3>}
        </section>
      </main>
      {renderScene(currentScene)}
    </>
  )
}

export default App
