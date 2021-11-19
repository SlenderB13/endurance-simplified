const titles = document.querySelector('.home__titles__wrapper')
const gallery = document.querySelector('.home__gallery__wrapper')
const cursor = document.querySelector('.cursor')

const scroll = {
  current: 0,
  target: 0,
  limit: 1000
}

let speed = 0

function update() {
  window.requestAnimationFrame(update)

  scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, 0.1)
  scroll.current = gsap.utils.clamp(0, scroll.limit, scroll.current)

  titles.style.left = `-${scroll.current * 1.5}px`
  gallery.style.left = `-${scroll.current}px`
}


window.addEventListener('mousewheel', (event) => {
  speed += event.deltaY
  scroll.target = speed * 0.5
})

window.addEventListener('mousemove', (event) => {
  cursor.style.top = event.pageY + 'px'
  cursor.style.left = event.pageX + 'px'
})


update()
