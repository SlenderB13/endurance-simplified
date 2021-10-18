import GSAP from 'gsap'

import each from 'lodash/each'

import Prefix from 'prefix'

export default class Page {
  constructor ({ id, element, elements }) {
    this.id = id
    this.selector = element
    this.selectorChildren = {
      ...elements
    }

    this.scroll = {
      current: 0,
      target: 0,
      last: 0
    }

    this.transformPrefix = Prefix('transform')

    this.addEventListeners()
    this.onMouseWheel()
    this.update()
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].lenght === 0) {
          this.elements[key] = null
        } else if (this.elements[key] === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      }
    })
  }

  show () {
    this.animateIn = GSAP.timeline()

    return new Promise(resolve => {
      GSAP.from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  hide () {
    this.animateOut = GSAP.timeline()

    return new Promise(resolve => {
      GSAP.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  update () {
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)
/* 
    if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
  }

  onMouseWheel (event) {
    console.log(event)
  }

  addEventListeners () {
    window.addEventListener('wheel', this.onMouseWheel)
  }
}
