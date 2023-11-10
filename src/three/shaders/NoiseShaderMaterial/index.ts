'use client';

import * as THREE from 'three'

import VertexShader from './vertex.glsl'
import FragmentShader from './fragment.glsl'

import { shaderMaterial } from '@react-three/drei';

const WaveShaderMaterial = shaderMaterial(
  {
    uColor: new THREE.Color(0, 0, 0),
    uTime: 0,
    uBump: 0
  },
  VertexShader,
  FragmentShader,
)

export default WaveShaderMaterial