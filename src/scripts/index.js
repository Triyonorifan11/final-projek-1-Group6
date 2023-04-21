import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';
import {
  addClassElement, getUserInfo, innerElement, redirect, removeClassElement,
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
    innerElement('#nama_akun', userAccess.nama_user);
    if (userAccess.role === 'admin') {
      addClassElement('#link-keranjang', 'd-none');
      removeClassElement('#link-dashoard', 'd-none');
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
