import { onNavigate } from './EventHandlers'
import 'normalize.css'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

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
} else {
  window.alert(
    "Hi! Welcome to my portfolio web app. Looks like your browser doesn't support service worker. Which means you can visit it only online. But you can visit also offline by a service worker supported browser too. Have fun! :)"
  )
}

navigator.onLine ||
  window.alert(
    "'Looks like you are visiting my portfolio web app offline. Feel free to take a look and please visit back when you are online also, to catch some updates. Thanks!'"
  )

// document.body.style.height = window.innerHeight + 'px';

const elementSelector = (name, id) =>
  id ? document.getElementById(name) : document.querySelector(name)

// Portfolio box in intro
const portfolioLink = elementSelector('.projects')

// Left arrow navigator on nav bar in portfolio section
const leftArrow = elementSelector('.arrow-left')

onNavigate({ right: portfolioLink, left: leftArrow })
