// import { onNavigate } from './EventHandlers';
// import 'normalize.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Skills Icons
import 'devicon/devicon.min.css';
// Social Icons
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// Custom css
import './index.css';

// Jquery
// import $ from 'jquery';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// Registering Our Service Worker
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  } else {
    window.alert(
      "Hi! Welcome to my portfolio web app. I just wanted to remind you that looks like your browser doesn't support service worker. Which means you can not visit me back offline. Have fun! :)"
    );
  }

  navigator.onLine ||
    window.alert(
      'Looks like you are visiting my portfolio web app offline. Feel free to take a look and please visit back when you are online also, to catch some updates. Thanks!'
    );

  const loading = document.querySelector('.intro-loader');
  const body = document.body;
  setTimeout(() => {
    loading.parentNode.removeChild(loading);
    body.style = 'opacity: 1';
  }, 100);
});
