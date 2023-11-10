import { useVideoTexture } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'


type Props = MeshProps & {videoUrl: string}


export const VideoPlane = ({ videoUrl, ...props }: Props) => {
//   const [video] = useState(() =>
//     Object.assign(document.createElement('video'), {
//       src: videoUrl,
//       crossOrigin: 'Anonymous',
//       loop: true,
//       muted: true,
//     })
//   )

//   useEffect(() => {
//     video.play()
//   }, [video])
const texture = useVideoTexture(videoUrl, {
    loop: true,
    muted: true,
    crossOrigin: 'Anonymous',
})
  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, 5, 0.51]}
      scale={[16, 9, 1]}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped/>
       
    </mesh>
  )
}
