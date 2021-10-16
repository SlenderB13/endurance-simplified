import Page from 'classes/Page'

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',
      element: '.home',
      elements: {
        navigation: document.querySelector('.navigation'),
        link: document.querySelector('.home__link')
      }
    })
  }

  create () {
    super.create()
  }
}
