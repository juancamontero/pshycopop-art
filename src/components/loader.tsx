import { Loader } from "@react-three/drei"

export const PyscoLoader = () => {
  return (
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
  )
}