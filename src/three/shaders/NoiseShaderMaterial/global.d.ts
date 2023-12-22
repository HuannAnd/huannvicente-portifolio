import { Object3DNode, extend } from "@react-three/fiber";

import NoiseShaderMaterial from './index'

import * as THREE from 'three'


export interface NoiseShaderMaterialProps
  extends THREE.ShaderMaterial,
  Partial<{
    uColor: THREE.Color,
    uTime: number,
    uBump: number,
  }> { }

declare module '@react-three/fiber' {
  interface ThreeElements {
    noiseShaderMaterial: Object3DNode<NoiseShaderMaterialProps, typeof NoiseShaderMaterial>
  }
}