import { MeshProps } from '@react-three/fiber'

export const TrainChimney = ({ ...props }: MeshProps) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.3, 0.1, 0.5]}/>
      <meshStandardMaterial color='darkslategray' flatShading={true} />
    </mesh>
  )
}
