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
      limit: 4000
    }

    this.transformPrefix = Prefix('left')

    this.addEventListeners()

    //this.onMouseWheel()

    // this.onMouseWheelEvent = this.onMouseWheel.bind(this)
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    each(this.selectorChildren, (entry, key) => {

      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      }

      //TODO: check the video to see how is he using the elements[key] outside this each loop

      
      console.log(this.elements[key])
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

  /* onMouseWheel (event) {
    const { deltaY } = event
    this.scroll.target += deltaY

    console.log(this.scroll.target)
    // FIXME: THE SCROLL VALUE NOT UPDATING   
  } */

  update () {
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)
    this.scroll.current = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.current)

    // TODO: FIGURE OUT HOW TO IMPLEMENT THE FOREACH HERE.

    each(this.elements, item => {
      item.style[this.transformPrefix] = `-${this.scroll.current}px`
    })
    
    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */  
  }

  addEventListeners () {
    window.addEventListener('mousewheel', (event) => {
      const { deltaY } = event
      this.scroll.target += deltaY
    })
  }
}
