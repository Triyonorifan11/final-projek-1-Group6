import 'regenerator-runtime';
import '../styles/style.css';
import './utils/asideElement';
import App from './views/app';
import {
  addClassElement, getItemCart, getUserInfo, innerElement, removeClassElement,
} from './utils/functions';

const app = new App({
  header: document.querySelector('#header'),
  aside: document.querySelector('#aside'),
  content: document.querySelector('#mainContent'),
});

const logout = document.getElementById('logout');

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  const userAccess = getUserInfo();
  if (userAccess) {
    removeClassElement('#akun', 'd-none');
    addClassElement('#link-login', 'd-none');
    if (userAccess.role === 'admin') {
      innerElement('#nama_akun', `Admin|${userAccess.nama_user}`);
      addClassElement('#link-keranjang', 'd-none');
      removeClassElement('#link-dashoard', 'd-none');
    } else {
      innerElement('#nama_akun', userAccess.nama_user);
      const itemCart = getItemCart();
      if (itemCart !== false) {
        innerElement('#keranjang', `<i class="bi bi-cart"></i> <span class="badge text-bg-secondary">${itemCart.length}</span>`);
      } else {
        innerElement('#keranjang', '<i class="bi bi-cart"></i> <span class="badge text-bg-secondary">0</span>');
      }
    }
  }
  app.renderPage();
});

logout.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('user_collexin');
  localStorage.removeItem('token_access');
  window.location.reload();
});
