import { useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, BufferGeometry, NormalBufferAttributes, Material, Object3DEventMap, MathUtils, TextureLoader } from "three"

export const RotatingBox = () => {
    const myMesh =
      useRef<
        Mesh<
          BufferGeometry<NormalBufferAttributes>,
          Material | Material[],
          Object3DEventMap
        >
      >(null)
    const radiansPerSecond = MathUtils.degToRad(10)
  
    useFrame((_state, dt) => {
      myMesh.current!.rotation.x += radiansPerSecond * dt
      myMesh.current!.rotation.y += radiansPerSecond * dt
      myMesh.current!.rotation.z += radiansPerSecond * dt
    })
  
    const colorMap = useLoader(TextureLoader, '/textures/uv_test_bw.jpg')
  
    return (
      <mesh ref={myMesh} rotation={[0.65, 0.65, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        {/* <meshStandardMaterial color='#f700ff' /> */}
        <meshStandardMaterial map={colorMap} color='white' />
      </mesh>
    )
  }