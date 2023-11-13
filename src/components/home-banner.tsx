import {  useLocation } from 'wouter'
export const HomeBanner = () => {
  const [, setLocation] = useLocation()
    // TODO: route implementacion
  return (
    <>
      <main className='app'>
        <section className='hero'>
          <h1>Pshyco Pop Art</h1>
          <h3>Portals - double click to enter portal </h3>
          <div className='btns-div'>
            {/* <a href='/'> */}
              <button onClick={() => setLocation('/')}>back</button>
            {/* </a> */}
          </div>
        </section>
      </main>
    </>
  )
}
