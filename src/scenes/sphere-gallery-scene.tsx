import {
  Environment,
  // GizmoHelper,
  // GizmoViewport,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Image,
} from '@react-three/drei'
import { useRoute } from 'wouter'

import { type GroupProps } from '@react-three/fiber'
import { GoBack } from '../components'

const GOLDENRATIO = 1.61803398875

export const SphereGalleryScene = ({
  idFrame,
  ...props
}: GroupProps & { idFrame: string }) => {
  const [, params] = useRoute('/item/:idFrame')
  console.log(params?.idFrame === idFrame)
  return (
    <>
      <PerspectiveCamera
        position={[0, 0, 3]}
        fov={60}
        makeDefault={params?.idFrame === idFrame}
      />
      <group {...props} position={[0, -0.65, 0]}>
        <directionalLight
          position={[5, 3, 2]}
          color='#570c0c'
          castShadow
          intensity={15}
          shadow-camera-near={0.1}
          shadow-camera-far={200}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Environment preset='city' />
        <GoBack position={[-0.23, 2.8, -3]} />
        <Sphere />
        {/* Gallery start */}

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[16, 16]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={0.8}
            mixStrength={8}
            roughness={0.5}
            depthScale={0}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#001582'
            metalness={0.1}
            mirror={1}
          />
        </mesh>

        {/* imagen 1 start */}
        <group position={[0, 0, -3]}>
          <mesh
            // onPointerOver={(e) => (e.stopPropagation(), hover(true))}
            // onPointerOut={() => hover(false)}
            scale={[1, GOLDENRATIO, 0.05]}
            position={[0, GOLDENRATIO / 2, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial
              color='#151515'
              metalness={0.5}
              roughness={0.5}
              envMapIntensity={2}
            />
            <mesh
              // ref={frame}
              raycast={() => null}
              scale={[0.9, 0.93, 0.9]}
              position={[0, 0, 0.2]}
            >
              <boxGeometry />
              <meshBasicMaterial toneMapped={false} fog={false} />
            </mesh>
            <Image
              raycast={() => null}
              position={[0, 0, 0.7]}
              url='/cami-pics/ave3.jpg'
            />
          </mesh>
        </group>

        {/* imagen  1 end */}

        {/*  imagen  2 start */}
        <group position={[-3, 0, 0]} rotation={[0, Math.PI / 2.5, 0]}>
          <mesh
            // onPointerOver={(e) => (e.stopPropagation(), hover(true))}
            // onPointerOut={() => hover(false)}
            scale={[GOLDENRATIO * 2, GOLDENRATIO, 0.05]}
            position={[0, GOLDENRATIO / 2, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial
              color='#151515'
              metalness={0.5}
              roughness={0.5}
              envMapIntensity={2}
            />
            <mesh
              // ref={frame}
              raycast={() => null}
              scale={[0.9, 0.93, 0.9]}
              position={[0, 0, 0.2]}
            >
              <boxGeometry />
              <meshBasicMaterial toneMapped={false} fog={false} />
            </mesh>
            <Image
              raycast={() => null}
              position={[0, 0, 0.7]}
              url='/cami-pics/womanintheshadow-1200x603.jpg'
            />
          </mesh>
        </group>

        {/* imagen  2 end */}

        {/*  imagen  3 start */}
        <group position={[3, 0, 0]} rotation={[0, -Math.PI / 2.5, 0]}>
          <mesh
            // onPointerOver={(e) => (e.stopPropagation(), hover(true))}
            // onPointerOut={() => hover(false)}
            scale={[GOLDENRATIO * 2, GOLDENRATIO, 0.05]}
            position={[0, GOLDENRATIO / 2, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial
              color='#151515'
              metalness={0.5}
              roughness={0.5}
              envMapIntensity={2}
            />
            <mesh
              // ref={frame}
              raycast={() => null}
              scale={[0.9, 0.93, 0.9]}
              position={[0, 0, 0.2]}
            >
              <boxGeometry />
              <meshBasicMaterial toneMapped={false} fog={false} />
            </mesh>
            <Image
              raycast={() => null}
              position={[0, 0, 0.7]}
              url='/cami-pics/womanintheshadow-1200x603.jpg'
            />
          </mesh>
        </group>

        {/* imagen  3 end */}

        {/* Gallery end */}
      </group>

      {/* <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor='white'
        />
      </GizmoHelper> */}

      <OrbitControls
        autoRotate
        autoRotateSpeed={3}
        enablePan={false}
        enableZoom={false}
        // maxZoom={10}
        // minZoom={10}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        // minAzimuthAngle={0.2}
        // maxAzimuthAngle={0.85}
        makeDefault={params?.idFrame === idFrame}
        rotateSpeed={0.6}
        zoomSpeed={0.6}
      />
    </>
  )
}

const Sphere = () => {
  return (
    <mesh castShadow position={[0, 0.56, 3]}>
      <sphereGeometry args={[0.55, 64, 64]} />
      <meshStandardMaterial metalness={1} roughness={0.46} color='#AA69FC' />
    </mesh>
  )
}
