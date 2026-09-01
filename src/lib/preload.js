import heroImg from '../assets/hero.png'
import mobileImg from '../assets/mobile.png'

export function preloadHeroImages() {
  const load = (url) =>
    new Promise((resolve) => {
      const img = new Image()
      img.src = url
      img.onload = resolve
      img.onerror = resolve
    })
  return Promise.all([load(heroImg), load(mobileImg)])
}
