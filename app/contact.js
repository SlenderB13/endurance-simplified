const contactWrapper = document.querySelector('.contact__wrapper')
const cursor = document.querySelector('.cursor')
const button = document.querySelector('button')

const scroll = {
  current: 0,
  target: 0,
  limit: 600
}

let speed = 0

button.addEventListener('mouseover', () => {
  gsap.to(cursor, {scale: 6, duration: 0.3})
  button.style.cursor = 'pointer'
})

button.addEventListener('mouseleave', () => {
  gsap.to(cursor, {scale: 1, duration: 0.3})
})


function update() {
  window.requestAnimationFrame(update)

  scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, 0.1)
  scroll.current = gsap.utils.clamp(0, scroll.limit, scroll.current)
  contactWrapper.style.top = `-${scroll.current}px`
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
