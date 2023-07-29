import './src/theme/main.css'
import './src/theme/main.css'
import './src/theme/partials/_variables.css'
export const onInitialClientRender = () => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
  }
}
import ScrollReveal from 'scrollreveal'

export const onClientEntry = () => {
  ScrollReveal().reveal('.slide-up', {
    delay: 200,
    useDelay: 'onload',
    reset: true,
    mobile: true, // Enable animation on mobile devices
  })
}
