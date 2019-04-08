import { onNavigate } from './EventHandlers'
import 'normalize.css'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

// Registering Our Service Worker
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  } else {
    window.alert(
      "Hi! Welcome to my portfolio web app. I just wanted to remind you that looks like your browser doesn't support service worker. Which means you can not visit me back offline. Have fun! :)"
    )
  }

  navigator.onLine ||
    window.alert(
      'Looks like you are visiting my portfolio web app offline. Feel free to take a look and please visit back when you are online also, to catch some updates. Thanks!'
    )

  // Portfolio box in intro
  const portfolioLink = document.querySelector('.projects')

  // Left arrow navigator on nav bar in portfolio section.
  const leftArrow = document.querySelector('.arrow-left')

  // Click event on links
  onNavigate({ right: portfolioLink, left: leftArrow })

  const loading = document.querySelector('.intro-loader')
  const main = document.getElementById('main')
  setTimeout(() => {
    loading.parentNode.removeChild(loading)
    main.style = 'opacity: 1'
  }, 1000)
})
