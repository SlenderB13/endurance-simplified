import Page from 'classes/Page'

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',
      element: '.home',
      elements: {
        // navigation: document.querySelector('.nav'),
        wrapper: '.home__titles__wrapper',
      }
    })
  }

  create () {
    super.create()
  }
}
