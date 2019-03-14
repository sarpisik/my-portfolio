import 'normalize.css'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
} else {
  // Registering Our Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

const elementSelector = (name, id) =>
  id ? document.getElementById(name) : document.querySelector(name)

const mainContainer = elementSelector('main', 'id')
const projectsLink = elementSelector('.projects')
const leftArrow = elementSelector('.arrow-left')

projectsLink.addEventListener('click', e => {
  e.preventDefault()
  mainContainer.classList.add('show-projects')
})

leftArrow.addEventListener('click', () => {
  mainContainer.classList.remove('show-projects')
})
