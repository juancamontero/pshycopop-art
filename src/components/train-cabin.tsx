import { MeshProps } from '@react-three/fiber'

export const TrainCabin = ({ ...props }: MeshProps) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[2, 2.25, 1.5]} />
      <meshStandardMaterial color='firebrick' flatShading={true} />
    </mesh>
  )
}
