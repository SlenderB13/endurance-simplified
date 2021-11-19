const contactWrapper = document.querySelector('.contact__wrapper')
const cursor = document.querySelector('.cursor')

console.log(contactWrapper.style.top)

const scroll = {
  current: 0,
  target: 0,
  limit: 600
}

let speed = 0

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
