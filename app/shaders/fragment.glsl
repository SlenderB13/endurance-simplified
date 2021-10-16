precision highp float;

uniform sampler2D tMap;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
    vec4 map = texture2D(tMap, vUv);
    
    gl_FragColor = vec4(0.8, 0.0, 0.0, 1.0);
}