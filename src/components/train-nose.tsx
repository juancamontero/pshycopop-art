import { MeshProps } from '@react-three/fiber'

export const TrainNose = ({ ...props }: MeshProps) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.75, 0.75, 3, 12]}/>
      <meshStandardMaterial color='firebrick' flatShading={true} />
    </mesh>
  )
}
