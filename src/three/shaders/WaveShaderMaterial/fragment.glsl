#define PI 3.1415926535897

uniform vec3 uColor;
uniform float uScreenWidth;
uniform float uTime;
uniform sampler2D uTexture;

varying vec2 vUv;
varying vec3 vPosition;
varying float vDisplacement;
varying float vWave;

void main() {
	float wave = vWave * 0.05;
	vec3 texture = texture2D(uTexture, vUv + wave).rgb;
  gl_FragColor = vec4(texture * vDisplacement, 1.0);
}