// Import Workbox for service worker management
import { Workbox } from 'workbox-window';
// Import the Editor class
import Editor from './editor';
// Import the database setup
import './database';
// Import the CSS styles
import '../css/style.css';

// Select the main element and clear its content
const main = document.querySelector('#main');
main.innerHTML = '';

// Function to load a spinner while the editor is being initialized
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

// Initialize the editor
const editor = new Editor();

// If the editor is not defined, load the spinner
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported by the browser
if ('serviceWorker' in navigator) {
  // Register the Workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  // Log an error if service workers are not supported
  console.error('Service workers are not supported in this browser.');
}