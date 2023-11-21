import { useState } from 'react'
import { useLocation } from 'wouter'

import { IconoClash, Portals, SculptureSpotlight, Train, Tutorial } from './worlds'

type CurrentScene = 1 | 2 | 3 | 4 | 5

function App() {
  const [, setLocation] = useLocation()
  const [currentScene, setCurrentScene] = useState<CurrentScene>(2)
  const [showBanner, setShowBanner] = useState<boolean>(false)

  const renderScene = (scene: number) => {
    switch (scene) {
      case 1:
        return <IconoClash />
      case 2:
        return <Portals />
      case 3:
        return <Train/>
        case 4:
          return <SculptureSpotlight/>
      case 5:
        return <Tutorial />
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
            <button onClick={() => setShowBanner(!showBanner)}>
              {!showBanner ? 'Hide' : 'Show'}
            </button>
          </div>

          {!showBanner && (
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
              {/* <button onClick={() => setCurrentScene(3)}>Lights </button> */}
              <button onClick={() => setCurrentScene(4)}>Sculpture</button>
              {currentScene === 2 && (
                <button onClick={() => setLocation('/')}>EXIT PORTAL</button>
              )}
            </div>
          )}
          {currentScene === 2 && <h3>Double click to enter portal</h3>}
        </section>
      </main>
      {renderScene(currentScene)}
    </>
  )
}

export default App
