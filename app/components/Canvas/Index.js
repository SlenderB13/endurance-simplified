import { Transform, Camera, Renderer } from 'ogl'

import Home from './Home'

export default class Canvas {
    constructor() {
        this.createScene()
        this.createCamera()
        this.createRenderer()
        this.createHome()
        this.update()
    }

    createScene () {
        this.scene = new Transform()
    }

    createCamera () {
        this.camera = new Camera(this.gl)
        this.camera.position.z = 5
        this.camera.perspective({
            aspect: window.innerWidth / window.innerHeight,
        });
    }

    createRenderer () {
        this.renderer = new Renderer(this.gl)
        this.gl = this.renderer.gl
        this.gl.clearColor(1, 1, 1, 1)
        document.body.appendChild(this.gl.canvas)
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    createHome () {
        this.home = new Home({
            gl: this.gl,
            scene: this.scene
        })
    }

    update () {
        this.home.update()
        this.renderer.render({
            camera: this.camera,
            scene: this.scene
        })
    }
}