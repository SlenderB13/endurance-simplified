import Component from 'classes/Component'
import gsap from 'gsap'
import { each } from 'lodash'
import { split } from 'utils/text'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        title: document.querySelector('.preloader__text__title'),
        number: document.querySelector('.preloader__number'),
        images: document.querySelectorAll('img')
      }
    })
    console.log(this.elements.title)

    this.length = 0

    this.createLoader()

    split({
      element: this.elements.title
    })

    split({
      element: this.elements.title,
    })

    split({
      element: this.elements.title,
    })

    this.elements.titleSpans = this.elements.title.querySelectorAll('span span span')
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
      element.src = element.getAttribute('src')
      element.onload = _ => this.onAssetLoaded(element)
    })
  }

  onLoaded () {

    // TODO: ADD THE ANIMATIONS AFTER THE PAGE IS LOADED

    
    return new Promise(resolve => {
      /*  this.animateOut.to(this.element, {
        autoAlpha: 0,
        delay: 2
      }) */

      this.animateOut = gsap.timeline()

      this.animateOut.to(this.elements.titleSpans, {
        stagger: 0.03,
        duration: 2,
        ease: 'expo.out',
        y: '-100%',
        delay: 0.5
      })


      this.animateOut.to(this.elements.number, {
        autoAlpha: 0,
        ease: 'expo.out',
        duration: 1
      })

      this.animateOut.to(this.element, {
        autoAlpha: 0,
        ease: 'expo.out',
        duration: 1
      })
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
