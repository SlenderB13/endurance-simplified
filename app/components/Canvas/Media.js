import { Plane, Program,Texture, Mesh } from 'ogl'

import vertex from 'shaders/vertex.glsl'
import fragment from 'shaders/fragment.glsl'

export default class Media {
    constructor({ gl, scene, element, index }) {
        this.gl = gl
        this.scene = scene
        this.element = element
        this.index = index
        console.log(index)
        this.createPlane()
        this.createProgram()
        this.createTexture()
        this.createMesh()
    }

    createPlane () {
        this.plane = new Plane(this.gl)
    }

    createProgram () {
        this.program = new Program(this.gl, {
            vertex,
            fragment
        })
    }

    createTexture () {
        this.texture = new Texture(this.gl)

        this.image = new window.Image()
        this.image.crossOrigin = 'anonymous'
        this.image.src = this.element.getAttribute('data-src')
        this.image.onload = _ => (this.texture.image = this.image)
    }

    createMesh () {
        this.mesh = new Mesh(this.gl, {
            geometry: this.plane,
            program: this.program,
            uniforms: {
                tMap: {value: this.texture}
            }
        })
        this.mesh.setParent(this.scene)

        this.mesh.position.x += this.index * this.mesh.scale.x
    }
}