const titles = document.querySelector('.home__titles__wrapper')
const gallery = document.querySelector('.home__gallery__wrapper')
const galleryElement = document.querySelector('.home__gallery')
const cursor = document.querySelector('.cursor')
const images = document.querySelectorAll('.home__gallery__media')

const galleryBounds = gallery.getBoundingClientRect()
const galleryWidth = galleryBounds.width
const galleryRight = galleryBounds.right

const scroll = {
  current: 0,
  target: 0,
  limit: 1000,
  last: 0
}

const extra = {
  y: 0
}

let speed = 0


/* update */
function update() {
  window.requestAnimationFrame(update)

  scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, 0.1)

  gsap.to(titles, {xPercent: -50, yPercent: -50, x: -scroll.current * 1.5, duration: 0.1})
  gsap.to(gallery, {xPercent: -50, yPercent: -50, x: -scroll.current, duration: 0.1})

  if (scroll.current < scroll.last) {
    this.direction = 'right'
  } else if (scroll.current > scroll.last) {
    this.direction = 'left'
  }

  scroll.last = scroll.current


  images.forEach((image, index) => {
    this.imageBounds = image.getBoundingClientRect()
    this.imageWidth = this.imageBounds.width
    this.imageRight = this.imageBounds.right
    this.imageLeft = this.imageBounds.left

    if(this.direction) {
      if(this.direction === 'left') {
        if(this.imageRight < window.screenLeft) {
        }
      } else if(this.direction === 'right') {
        if(this.imageLeft > window.screenLeft + window.innerWidth) {
        }
      }
    }

    image.addEventListener('mouseover', () => {
      gsap.to(cursor, {scale: 6, duration: 0.3})
    })
    image.addEventListener('mouseleave', () => {
      gsap.to(cursor, {scale: 1, duration: 0.3})
    })
  })
}

/* eventlisteners */
window.addEventListener('mousewheel', (event) => {
  speed += event.deltaY
  scroll.target = speed * 0.5
})

window.addEventListener('mousemove', (event) => {
  cursor.style.top = event.pageY + 'px'
  cursor.style.left = event.pageX + 'px'
})


update()
