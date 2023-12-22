import { shaderMaterial } from '@react-three/drei'

import VertexShader from './vertex.glsl'
import FragmentShader from './fragment.glsl'

import * as THREE from "three";

const WaveShaderMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uScreenWidth: 0,
    uTime: 0,
    uTexture: new THREE.Texture()
  },
  VertexShader,
  FragmentShader
)

export default WaveShaderMaterial