import { loadNavbar } from './components/navbar.js';
import { loadHome } from './pages/home.js';
import { loadAbout } from './pages/about.js';
import { loadContact } from './pages/contact.js';

loadNavbar();
navigate();

window.addEventListener('hashchange', navigate);

function navigate() {
  const hash = window.location.hash || '#home';
  const app = document.getElementById('app');

  if (hash === '#home') loadHome(app);
  else if (hash === '#about') loadAbout(app);
  else if (hash === '#contact') loadContact(app);
}
