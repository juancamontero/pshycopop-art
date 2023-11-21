import { useThree, useFrame } from "@react-three/fiber"

export const RigZoom = () => {
  const { camera } = useThree()

  useFrame((_state, dt) => {
    camera.position.set(0, 0, camera.position.z + dt)
  })
  return <perspectiveCamera />
}