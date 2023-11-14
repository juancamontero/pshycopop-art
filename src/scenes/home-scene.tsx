import * as THREE from 'three'
import { Environment, Stars, RoundedBox, useScroll } from '@react-three/drei'
import { Ground, MeshCurve, VideoPlane } from '../components'
import { Guitar } from '../models'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
// import { useControls } from 'leva'

const CURVE = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 30, 60),
  new THREE.Vector3(0, 30, 80),
  new THREE.Vector3(60, 30, 45),
  new THREE.Vector3(80, 30, 0),
  new THREE.Vector3(60, 30, -45),
  new THREE.Vector3(0, 30, -80),
  new THREE.Vector3(0, 30, -60),
])

const Sphere = () => {
  const ref = useRef<THREE.Mesh>(null)
  return (
    <mesh ref={ref} receiveShadow castShadow position={[-3, 0.55, 8]}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial roughness={0} metalness={0.25} />
    </mesh>
  )
}

const Decorations = () => (
  <>
    {/* decorations start */}
    <group position={[0, 0, 0]}>
      <RoundedBox
        receiveShadow
        castShadow
        smoothness={10}
        radius={0.015}
        position={[-7, 1, 1.6]}
        scale={[4.2, 2, 2]}
      >
        <meshStandardMaterial
          color='#f4ae00'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </RoundedBox>
      <mesh position={[5, 1, 5]} castShadow>
        <icosahedronGeometry />
        <meshStandardMaterial
          color='#8e00f4'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </mesh>
      <mesh
        receiveShadow
        castShadow
        rotation-x={-Math.PI / 2}
        position={[8, 1.1, 2]}
        scale={[2, 2, 2]}
      >
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color='#2d2d2d'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
          wireframe
        />
      </mesh>
      <Guitar position={[0, 1.5, 5]} rotation-y={Math.PI / 0.31} scale={4} />
    </group>
    {/* decorations end */}
  </>
)

const BackgroundBoxes = () => {
  return (
    <>
      <mesh position={[-15, 5, -15]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial color='hotpink' />
      </mesh>
    </>
  )
}

export const HomeScene = () => {
  const cameraPositionPoints = CURVE.getPoints(200)

  const scroll = useScroll()

  useFrame((state) => {
    const positionPoint = CURVE.getPoint(scroll.offset)

    state.camera.position.set(positionPoint.x, positionPoint.y, positionPoint.z)
    state.camera.lookAt(0, 0, 0)
  })

  // todo: Controles de luz
  // const pointLightControls = useControls({
  //   intensity: { value: 5, min: 0, max: 20, step: 1 },
  //   power: { value: 5000, min: 0, max: 10000, step: 100 },
  //   xPos: { value: 4, min: -20, max: 20, step: 0.5 },
  //   yPos: { value: 8, min: -20, max: 20, step: 0.5 },
  //   zPos: { value: 6, min: -20, max: 20, step: 0.5 },
  //   color: '#c804cb',
  // })

  // ! comment next line if controls are enable
  const pointLightControls = {
    intensity: 5,
    power: 5000,
    xPos: 4,
    yPos: 11,
    zPos: -12.6,
    color: '#c804cb',
  }

  return (
    <>
      <group scale={1.75} position={[0, 0, -5]}>
        <pointLight
          position={[
            pointLightControls.xPos || 5,
            pointLightControls.yPos,
            pointLightControls.zPos,
          ]}
          color={pointLightControls.color}
          castShadow
          intensity={pointLightControls.intensity}
          shadow-camera-near={0.1}
          shadow-camera-far={200}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          power={pointLightControls.power}
        />
        <directionalLight
          position={[0, 7, -1]}
          color='#570c0c'
          castShadow
          intensity={5}
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
        {/* <ambientLight /> */}

        {/* <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
          <GizmoViewport
            axisColors={['red', 'green', 'blue']}
            labelColor='white'
          />
        </GizmoHelper> */}

        <MeshCurve points={cameraPositionPoints} />

        <group position={[0, -3, 0]}>
          <VideoPlane videoUrl='/4x3-mobil.mp4' />
          {/* <VideoPlane
          position={[0, 5, -0.51]}
          rotation-y={Math.PI}
          videoUrl='/4x3-mobil.mp4'
        /> */}

          {/* wall */}
          <mesh castShadow receiveShadow position={[0, 5, 0]}>
            <boxGeometry args={[17, 10, 1]} />
            <meshStandardMaterial
              color='black'
              envMapIntensity={0.5}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* ground */}
          <mesh position={[0, -5, 0]}>
            <cylinderGeometry args={[10, 10, 10, 64]} />
            <meshStandardMaterial
              color='black'
              envMapIntensity={0.5}
              roughness={0}
              metalness={0}
            />
          </mesh>

          <Decorations />
        </group>
        <Sphere />
        <Ground />

        <BackgroundBoxes />
        <Suspense>
          <Stars
            radius={50}
            depth={50}
            count={5000}
            factor={20}
            saturation={0}
            fade
            speed={1}
          />
        </Suspense>
        {/* <EffectsMod/> */}
      </group>
    </>
  )
}
