uniform vec3 uColor;
uniform float uTime;

varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;
varying float vDisplacement;

void main() {
  gl_FragColor = vec4(vec3(vDisplacement) * uColor, 1.0);
}