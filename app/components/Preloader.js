import Component from 'classes/Component'
import gsap from 'gsap'
import { each } from 'lodash'
import { split } from 'utils/text'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        title: document.querySelector('.preloader__text'),
        number: document.querySelector('.preloader__number'),
        images: document.querySelectorAll('img')
      }
    })

    this.length = 0

    this.createLoader()

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    split({
      element: this.elements.title,
      expression: '<br>'
    })

    this.elements.titleSpans = this.elements.title.querySelectorAll('span span')
  }

  onAssetLoaded (image) {
    this.length += 1
    const percent = Math.round(this.length / this.elements.images.length * 100)

    this.elements.number.innerHTML = `${percent}%`

    if (percent === 100) {
      this.onLoaded()
    }
  }

  createLoader () {
    each(this.elements.images, element => {
      element.src = element.getAttribute('data-src')
      element.onload = _ => this.onAssetLoaded(element)
    })
  }

  onLoaded () {
    return new Promise(resolve => {
      /*  this.animateOut.to(this.element, {
        autoAlpha: 0,
        delay: 2
      }) */

      this.animateOut = gsap.timeline()

      this.animateOut.to(this.elements.titleSpans, {
        stagger: 0.1,
        duration: 1.5,
        ease: 'expo.out',
        y: '100%'
      })

      this.animateOut.to(this.element, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: 'expo.out'
      })
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
