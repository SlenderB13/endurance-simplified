import { Box, Program, Mesh } from 'ogl'

import { map } from 'lodash'

import vertex from 'shaders/vertex.glsl'
import fragment from 'shaders/fragment.glsl'

import Media from './Media'

export default class Home {
    constructor({ gl, scene }) {
        this.medias = document.querySelectorAll('.home__gallery__image')
        this.gl = gl
        this.scene = scene

        // this.createBox()
        // this.createProgram()
        // this.createMesh()
        this.createMedias()
        this.update()
    }

   /*  createBox () {
        this.box = new Box(this.gl)
    } */

   /*  createProgram () {
        this.program = new Program(this.gl, {
            vertex,
            fragment
        })
    } */

   /*  createMesh () {
        this.mesh = new Mesh(this.gl, {
            geometry: this.box,
            program: this.program
        })
        this.mesh.setParent(this.scene)
    } */

    createMedias () {
        map(this.medias, (element, index) => {
            return new Media({
                gl: this.gl,
                scene: this.scene,
                element,
                index
            })
        })
    }
    
    update () {
       /*  this.mesh.rotation.x += 0.02
        this.mesh.rotation.y += 0.02 */
    }
}