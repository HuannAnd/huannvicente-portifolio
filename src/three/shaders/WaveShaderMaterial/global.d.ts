import { Object3DNode } from "@react-three/fiber";

import * as THREE from "three";

import WaveShaderMaterial from "./index"

interface WaveShaderMaterialProps
  extends THREE.ShaderMaterial,
  Partial<{
    uColor: THREE.Color,
    uScreenWidth: number,
    uTime: number,
    uTexture: THREE.Texture
  }> { }

declare module '@react-three/fiber' {
  interface ThreeElements {
    waveShaderMaterial: Object3DNode<WaveShaderMaterialProps, typeof WaveShaderMaterial>
  }
}