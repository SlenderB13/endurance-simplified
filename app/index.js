import About from './pages/About'
import Home from './pages/Home'
import Preloader from './components/Preloader'

import { each } from 'lodash'

class App {
  constructor () {  
    this.createPreloader()  
    this.createContent()
    this.createPages()
    this.addLinkListeners()
    this.update()
  }

  onPreloaded () {
    this.preloader.hide()
    this.preloader.destroy()
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages () {
    this.pages = {
      home: new Home(),
      about: new About(),
    }

    this.page = this.pages[this.template]
    this.page.create()
    this.page.show()
  }

  async onChange (url) {
    this.page.hide()
    const request = await window.fetch(url)

    if (request.status === 200) {
      const nextPage = await request.text()

      const div = document.createElement('div')
      div.innerHTML = nextPage

      const divContent = div.querySelector('.content')
      this.content.setAttribute('data-template', divContent.getAttribute('data-template'))
      this.content.innerHTML = divContent.innerHTML

      this.page.create()
      this.page.show()
      this.addLinkListeners()
    } else {
      console.log('Deu pau, bixo!!')
    }
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, link => {
      link.onclick = event => {
        event.preventDefault()

        const { href } = link
        this.onChange(href)
      }
    })
  }

  update () {
    if (this.page && this.page.update) {
      this.page.update()
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }
}

/* eslint no-new: "off" */
new App()
