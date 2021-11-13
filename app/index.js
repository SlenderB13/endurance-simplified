const titles = document.querySelector('.home__titles__wrapper')

const scroll = {
  current: 0,
  target: 0
}

let speed = 0


window.addEventListener('mousewheel', (event) => {
  speed += event.deltaY
  scroll.target += speed * 0.5
  update()
})

function update() {
  window.requestAnimationFrame(update)

  scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, 0.1)
  titles.style.transform = `-translateX(${scroll.current}px)`
}
