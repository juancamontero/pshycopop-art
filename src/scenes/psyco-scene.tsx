import { PortalFrame } from '../components'
import { SphereGalleryScene } from '.'
import { Gltf } from '@react-three/drei'

export const PsycoScene = () => {
  return (
    <>
      <group>
        <PortalFrame
          idFrame='01'
          name={`Avewoman`}
          author='Camilo Hernandez'
          bg='#EC49BD'
          position={[-0.75, 0.1, 0]}
          rotation={[0, 0.5, 0]}
        >
          <SphereGalleryScene idFrame='01' />
        </PortalFrame>

        {/* <PortalFrame
          position={[0, 0, 0]}
          idFrame='02'
          name='tea'
          author='Omar Faruq Tawsif'
          bg='#db3d92'
        >
          <SphereGalleryScene idFrame='02' />
        </PortalFrame> */}

        <PortalFrame
          idFrame='03'
          name='still'
          author='Omar Faruq Tawsif'
          bg='#a91fac'
          position={[0.75, 0.1, 0]}
          rotation={[0, -0.5, 0]}
        >
          {/* <SphereGalleryScene idFrame='03' /> */}
          <Gltf src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={16} position={[1, -1, -1]} />
         
        </PortalFrame>
      </group>
    </>
  )
}
