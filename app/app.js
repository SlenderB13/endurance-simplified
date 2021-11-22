const titles = document.querySelector('.home__titles__wrapper')
const gallery = document.querySelector('.home__gallery__wrapper')
const cursor = document.querySelector('.cursor')
const images = document.querySelectorAll('.home__gallery__media__image')

const scroll = {
  current: 0,
  target: 0,
  limit: 1000
}

let speed = 0

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    gsap.to(cursor, {scale: 6, duration: 0.3})
  })
  image.addEventListener('mouseleave', () => {
    gsap.to(cursor, {scale: 1, duration: 0.3})
  })
})
/* update */
function update() {
  window.requestAnimationFrame(update)

  scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, 0.1)

  gsap.to(titles, {xPercent: -50, yPercent: -50, x: -scroll.current * 1.5, duration: 0.1})
  gsap.to(gallery, {xPercent: -50, yPercent: -50, x: -scroll.current, duration: 0.1})
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
