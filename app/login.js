const loginWrapper = document.querySelector('.login__wrapper')
const cursor = document.querySelector('.cursor')
const stripe = document.querySelector('.stripe')
const buttons = document.querySelectorAll('button')

const scroll = {
  current: 0,
  target: 0,
  limit: 600
}

let speed = 0

buttons.forEach(button => {
  button.addEventListener('mouseover', ()=> {
    gsap.to(cursor, {scale: 6, duration: 0.3})
    button.style.cursor = 'pointer'
  })
  button.addEventListener('mouseleave', ()=> {
    gsap.to(cursor, {scale: 1, duration: 0.3})
    button.style.cursor = 'pointer'
  })
})

function update() {
  window.requestAnimationFrame(update)

  scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, 0.1)
  scroll.current = gsap.utils.clamp(0, scroll.limit, scroll.current)
  loginWrapper.style.top = `-${scroll.current}px`
  stripe.style.top = `-${scroll.current * 0.4}px`
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
